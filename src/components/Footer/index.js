import * as React from "react";

export default function Footer() {
  return (
    <div
      className="bg-bg-primary text-bd-primary p-4 flex-shrink-0"
      data-component="Footer"
    >
      <div className="w-4/5 mx-auto">
        <div>This is going to be the footer</div>
        <div> Curacao License</div>
        <div className="flex flex-col">
          <p> Info </p>
          <p> Info </p>
          <p> Info </p>
          <p> Info </p>
        </div>
      </div>
    </div>
  );
}
