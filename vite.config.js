import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// styleImport有bug 使用vitePluginImp
// import styleImport from "vite-plugin-style-import";
import vitePluginImp from "vite-plugin-imp";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginImp({
      //组件按需导入
      libList: [
        {
          libName: "vant",
          style(name) {
            return `vant/es/${name}/index.css`;
          },
        },
      ],
    }),
  ],
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  server: {
    port: 9999,
  },
  proxy: {},
});
