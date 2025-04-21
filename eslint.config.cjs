const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const {
    fixupConfigRules,
} = require("@eslint/compat");

const reactRefresh = require("eslint-plugin-react-refresh");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([globalIgnores(["**/dist", "**/.eslintrc.cjs"]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    )),

    plugins: {
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    settings: {
        react: {
            version: "18.2",
        },
    },

    rules: {
        "react/prop-types": "off",

        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],
    },
}]);