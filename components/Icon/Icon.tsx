import styles from "./icon.module.css";

type SvgProps = {
  className?: string;
  children: any;
  viewBox: string;
};

function Svg({ className, children, ...props }: SvgProps) {
  return (
    <svg className={`${className} ${styles.icon}`} {...props}>
      {children}
    </svg>
  );
}

type IocnProps = {
  name:
    | "dropdown"
    | "fb"
    | "dark-mode"
    | "light-mode"
    | "fb"
    | "mobile"
    | "ru"
    | "en"
    | "arm";
};

export default function Icon({ name }: IocnProps) {
  switch (name) {
    case "dropdown": {
      return (
        <Svg viewBox="0 0 32 32">
          <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"></path>
          <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path>
        </Svg>
      );
    }
    case "fb": {
      return (
        <Svg viewBox="0 0 32 32">
          <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
        </Svg>
      );
    }
    case "arm": {
      return (
        <Svg viewBox="0 0 640 480">
          <path fill="#d90012" d="M0 0h640v160H0z" />
          <path fill="#0033a0" d="M0 160h640v160H0z" />
          <path fill="#f2a800" d="M0 320h640v160H0z" />
        </Svg>
      );
    }
    case "en": {
      return (
        <Svg viewBox="0 0 640 480">
          <path fill="#012169" d="M0 0h512v512H0z" />
          <path
            fill="#FFF"
            d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
          />
          <path
            fill="#C8102E"
            d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
          />
          <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z" />
          <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z" />
        </Svg>
      );
    }
    case "ru": {
      return (
        <Svg viewBox="0 0 640 480">
          <g fill-rule="evenodd" stroke-width="1pt">
            <path fill="#fff" d="M0 0h640v480H0z" />
            <path fill="#0039a6" d="M0 160h640v320H0z" />
            <path fill="#d52b1e" d="M0 320h640v160H0z" />
          </g>
        </Svg>
      );
    }
    case "mobile": {
      return (
        <Svg viewBox="0 0 32 32">
          <path d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"></path>
        </Svg>
      );
    }
    case "dark-mode": {
      return (
        <Svg viewBox="0 0 24 24">
          <path d="M12 12q0-1.781 0.68-3.352t1.875-2.742 2.742-1.781q0.469-0.188 0.586-0.586t-0.094-0.797-0.68-0.492q-0.797-0.188-1.664-0.234t-1.805 0.094q-1.688 0.188-3.164 0.961t-2.625 1.969-1.875 2.695-0.914 3.188q-0.234 2.25 0.445 4.242t2.086 3.539 3.305 2.414 4.102 0.867q1.078 0 2.109-0.234 0.516-0.094 0.703-0.469t0.070-0.797-0.539-0.609q-1.641-0.656-2.836-1.852t-1.852-2.742-0.656-3.281v0z"></path>
        </Svg>
      );
    }
    case "light-mode": {
      return (
        <Svg viewBox="0 0 20 20">
          <path d="M19 9.199c-0.182 0-0.799 0-0.98 0-0.553 0-1 0.359-1 0.801s0.447 0.799 1 0.799c0.182 0 0.799 0 0.98 0 0.552 0 1-0.357 1-0.799 0-0.441-0.449-0.801-1-0.801zM10 4.5c-3.051 0-5.5 2.449-5.5 5.5s2.449 5.5 5.5 5.5c3.050 0 5.5-2.449 5.5-5.5s-2.451-5.5-5.5-5.5zM10 14c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4 2.209 0 4 1.789 4 4 0 2.209-1.791 4-4 4zM3 10c0-0.441-0.449-0.801-1-0.801-0.185 0-0.816 0-1 0-0.553 0-1 0.359-1 0.801s0.447 0.799 1 0.799c0.184 0 0.815 0 1 0 0.551 0 1-0.358 1-0.799zM10 3c0.441 0 0.799-0.447 0.799-1 0-0.184 0-0.816 0-1 0-0.553-0.358-1-0.799-1s-0.801 0.447-0.801 1c0 0.184 0 0.816 0 1 0 0.553 0.359 1 0.801 1zM10 17c-0.442 0-0.801 0.447-0.801 1 0 0.184 0 0.816 0 1 0 0.553 0.359 1 0.801 1s0.799-0.447 0.799-1c0-0.184 0-0.816 0-1 0-0.553-0.358-1-0.799-1zM17.365 3.766c0.391-0.391 0.454-0.961 0.142-1.273s-0.883-0.248-1.272 0.143c-0.108 0.107-0.593 0.592-0.7 0.699-0.391 0.391-0.454 0.961-0.142 1.273s0.883 0.248 1.273-0.143c0.107-0.108 0.591-0.592 0.699-0.699zM3.334 15.533c-0.108 0.109-0.593 0.594-0.7 0.701-0.391 0.391-0.454 0.959-0.142 1.271s0.883 0.25 1.272-0.141c0.108-0.107 0.593-0.592 0.7-0.699 0.391-0.391 0.454-0.961 0.142-1.274s-0.883-0.247-1.272 0.142zM3.765 2.635c-0.39-0.391-0.961-0.455-1.273-0.143s-0.248 0.883 0.141 1.274c0.108 0.107 0.593 0.592 0.7 0.699 0.391 0.391 0.96 0.455 1.272 0.143s0.249-0.883-0.141-1.273c-0.107-0.108-0.591-0.593-0.699-0.7zM15.534 16.666c0.108 0.107 0.593 0.592 0.7 0.699 0.391 0.391 0.96 0.453 1.272 0.143 0.312-0.312 0.249-0.883-0.142-1.273-0.107-0.107-0.592-0.592-0.699-0.699-0.391-0.391-0.961-0.455-1.274-0.143s-0.248 0.882 0.143 1.273z"></path>
        </Svg>
      );
    }
  }
  return null;
}
