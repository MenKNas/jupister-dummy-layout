import * as React from "react";
import { createPortal } from "react-dom";
import { usePortalManager } from "./PortalManager";
import { useIsomorphicLayoutEffect } from "react-use";
import { useForceUpdate } from "../../hooks/useForceUpdate";

const Ctx = React.createContext();

function Container({ children, zIndex }) {
  return (
    <div
      className="absolute start-0 end-0 top-0"
      style={{
        zIndex,
      }}
    >
      {children}
    </div>
  );
}

function canUseDOM() {
  return !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );
}

function ContainerPortal({ children, containerRef, appendToParentPortal }) {
  const containerEl = containerRef.current;
  const host = containerEl ?? (canUseDOM() ? document.body : undefined);

  const portal = React.useMemo(
    () => containerEl?.ownerDocument.createElement("div"),
    [containerEl]
  );

  const forceUpdate = useForceUpdate();
  useIsomorphicLayoutEffect(() => forceUpdate(), []);
  useIsomorphicLayoutEffect(() => {
    if (!portal || !host) return;
    host.appendChild(portal);
    return () => {
      host.removeChild(portal);
    };
  }, [portal, host]);

  if (host && portal) {
    return createPortal(
      <Ctx.Provider value={appendToParentPortal ? portal : null}>
        {children}
      </Ctx.Provider>,
      portal
    );
  }
}

function DefaultPortal({ appendToParentPortal, children }) {
  const tempNode = React.useRef(null);
  const portal = React.useRef(null);

  const forceUpdate = useForceUpdate();
  const parentPortal = React.useContext(Ctx);
  const manager = usePortalManager();

  useIsomorphicLayoutEffect(() => {
    if (!tempNode.current) return;

    const doc = tempNode.current.ownerDocument;
    const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;

    if (!host) return;

    portal.current = doc.createElement("div");
    portal.current.className = "portal";

    host.appendChild(portal.current);
    forceUpdate();

    const portalNode = portal.current;
    return () => {
      if (host.contains(portalNode)) host.removeChild(portalNode);
    };
  }, [appendToParentPortal, parentPortal, forceUpdate]);

  const _children = manager?.zIndex ? (
    <Container zIndex={manager?.zIndex}>{children}</Container>
  ) : (
    children
  );

  return portal.current ? (
    createPortal(
      <Ctx.Provider value={portal.current}>{_children}</Ctx.Provider>,
      portal.current
    )
  ) : (
    <span ref={tempNode} />
  );
}

export function Portal({ containerRef, ...rest }) {
  return containerRef ? (
    <ContainerPortal containerRef={containerRef} {...rest} />
  ) : (
    <DefaultPortal {...rest} />
  );
}
