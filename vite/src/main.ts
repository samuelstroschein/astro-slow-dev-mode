import * as m from "./paraglide/messages.js";

// This should be removed by the compiler
// (can be verified by inspecting the output in dist)

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>${m.GB_included({ name: "John Doe" })}</h1>
  </div>
`;
