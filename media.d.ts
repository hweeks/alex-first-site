const value: any;

declare module "*.png" {
  export = value;
}

declare module "*.svg" {
  export = value;
}

declare module "*.woff" {
  export = value;
}

declare module "*.woff2" {
  export = value;
}

declare module "*.otf"{
  export = value;
}

declare module "*.pdf"{
  const content: any;
  export default content;
}
