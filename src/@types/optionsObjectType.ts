interface OptionsContent {
  value: string;
  label: string;
  index: number;
}

interface Options {
    options: OptionsContent[]
}

export type { Options, OptionsContent }
