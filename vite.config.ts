import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    semi: true,
    singleQuote: false,
    printWidth: 100,
    trailingComma: "all",
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    rules: {
      "typescript/no-floating-promises": "error",
      "typescript/no-misused-promises": "error",
      "typescript/await-thenable": "error",
      "typescript/no-unnecessary-type-assertion": "warn",
      "typescript/no-unsafe-argument": "warn",
      "typescript/no-unsafe-assignment": "warn",
      "typescript/no-unsafe-call": "warn",
      "typescript/no-unsafe-member-access": "warn",
      "typescript/no-unsafe-return": "warn",
    },
    settings: {
      typescript: {
        project: "./tsconfig.json",
      },
    },
    ignorePatterns: ["dist", "node_modules", "cdk.out"],
  },
  test: {
    include: ["test/**/*.test.ts"],
  },
  pack: [
    {
      name: "lib",
      entry: ["lib/**/*.ts", "!lib/**/*.d.ts"],
      format: "esm",
      outDir: "dist",
      clean: true,
      sourcemap: true,
      platform: "node",
      target: "node24",
      deps: {
        neverBundle: ["aws-cdk-lib", "constructs", "source-map-support"],
      },
    },
    {
      name: "bin",
      entry: ["bin/cdk-gof-design-pattern.ts"],
      format: "esm",
      outDir: "dist/bin",
      clean: false,
      sourcemap: true,
      platform: "node",
      target: "node24",
      deps: {
        neverBundle: ["aws-cdk-lib", "constructs", "source-map-support"],
      },
    },
    {
      name: "singleton",
      entry: ["lib/stack/singleton/lambda/index.ts"],
      format: "esm",
      outDir: "lib/stack/singleton/lambda/dist",
      clean: true,
      platform: "node",
      target: "node24",
      deps: {
        neverBundle: ["aws-sdk"],
      },
    },
  ],
  run: {
    tasks: {
      cli: {
        command: "node --enable-source-maps --strip-types bin/cdk-gof-design-pattern.ts",
        cache: false,
      },
    },
  },
  staged: {
    "*": "vp check --fix",
  },
});
