import React from "react";
import Accordion from "react-bootstrap/Accordion";



function Hours() {
  return (
    <div className="bg-[#F8F0E3] p-4">
      <div>Hours!!!</div>
      <div className="">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <iframe
                allowTransparency="true"
                src="https://script.google.com/macros/s/AKfycbyL-IdLbsClp4-3j9Mpb1wzke9LXAevpuVKcaKoImG3NOHlnwzSMxvzF-JTGT3ddJ7M/exec"
                height="470"
                width="100%"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              <iframe
                allowTransparency="true"
                src="https://script.google.com/macros/s/AKfycbyL-IdLbsClp4-3j9Mpb1wzke9LXAevpuVKcaKoImG3NOHlnwzSMxvzF-JTGT3ddJ7M/exec"
                height="470"
                width="100%"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <iframe
          allowTransparency="true"
          src="https://script.google.com/macros/s/AKfycbyL-IdLbsClp4-3j9Mpb1wzke9LXAevpuVKcaKoImG3NOHlnwzSMxvzF-JTGT3ddJ7M/exec"
          height="470"
          width="100%"
        /> */}
      </div>
    </div>
  );
}

export default Hours
