import { html, render } from "iares";
import type { Props } from "iares";

type HelloProps = {
	name: string;
};

type Params = {
	props: Props<HelloProps>;
};

const text = "wellcome!";

const AppName = ({ props }: Params) => html`
  <span>${props.name} </span>
`;

const AppHello = ({ props }: Params) => html`
   <div class="wrap">
     hello <${AppName} name=${props.name} />, 
     <span>${text}</span>
  </div> 
`;

const target = document.querySelector("body") as HTMLElement;
const props: HelloProps = { name: "Rodrigo Rocha" };

render(AppHello, { target, props });
