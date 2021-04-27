import * as React from "react";

export default function About() {
  return (
    <div data-component="About" className="md:px-4 max-w-1400 mx-auto">
      <div className="space-y-4 md:py-4">
        <div className="flex flex-col bg-bg-secondary py-4 px-8 text-white space-y-8">
          <div className="space-y-2">
            <h1 className="font-bold uppercase text-xl"> About us</h1>
            <div className="space-y-4">
              <p>
                Red lion is the platform you have been looking for. Thanks to
                years of experience behind the wheel, our team has managed to
                collaborate with the best gaming providers out there in order to
                provide you the full-on experience.
              </p>
              <p>
                Our compatible desktop and mobile-friendly platform aim to
                provide you the full catered experience so you do not feel the
                need to suit up and leave the comfort of your home to that same
                old boring brick and mortar establishment.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="font-bold uppercase text-xl">why choose red lion</h1>
            <div className="space-y-4">
              <p>
                We commit ourselves to always putting our customers first. This
                starts with a very swift registration process which takes only 2
                minutes to create an account. You may then begin experiencing
                all what Red lion has to offer, which includes over 400 titles
                of Slot & Table games. Once you have created your Red lion
                account you will be entitled to our industry leading welcome
                offer. We offer a wide range of both fiat and crypto-currency
                methods and will throw in extra benefits when choosing Bitcoin.
                We take your security very seriously, which is why we use
                128-bit SSL technology to protect your data and maintain
                airtight compliance with international data protection and
                privacy laws. We strive to offer top level customer service for
                whichever query you might have, you will find our team available
                round the clock who are both friendly and highly professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
