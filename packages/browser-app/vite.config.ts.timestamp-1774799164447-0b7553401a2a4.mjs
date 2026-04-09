// vite.config.ts
import { defineConfig } from "file:///Users/yuri/ojfbot/seh-study/node_modules/.pnpm/vite@5.4.21_@types+node@22.19.15_sass@1.98.0/node_modules/vite/dist/node/index.js";
import react from "file:///Users/yuri/ojfbot/seh-study/node_modules/.pnpm/@vitejs+plugin-react@4.7.0_vite@5.4.21_@types+node@22.19.15_sass@1.98.0_/node_modules/@vitejs/plugin-react/dist/index.js";
import cssInjectedByJsPlugin from "file:///Users/yuri/ojfbot/seh-study/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.5.2_vite@5.4.21_@types+node@22.19.15_sass@1.98.0_/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import federation from "file:///Users/yuri/ojfbot/seh-study/node_modules/.pnpm/@originjs+vite-plugin-federation@1.4.1/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    // cssInjectedByJs MUST come before federation — otherwise remote CSS doesn't load in shell
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: ({ fileName }) => fileName.includes("__federation_expose_")
    }),
    federation({
      name: "seh_study",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/components/Dashboard.tsx",
        "./Settings": "./src/pages/Settings.tsx"
      },
      shared: {
        react: { singleton: true, requiredVersion: "^18.3.0" },
        "react-dom": { singleton: true, requiredVersion: "^18.3.0" },
        "@reduxjs/toolkit": { singleton: true, requiredVersion: "^2.0.0" },
        "react-redux": { singleton: true, requiredVersion: "^9.0.0" },
        "@carbon/react": { singleton: true, requiredVersion: "^1.67.0" }
      }
    })
  ],
  // Treat frame-ui-components as source (file: linked, not pre-built)
  optimizeDeps: {
    exclude: ["@ojfbot/frame-ui-components"],
    // CJS transitive deps of the excluded package must be explicitly included
    // so Vite pre-bundles them into ESM — otherwise browsers get CJS/ESM mismatch.
    include: [
      "@ojfbot/frame-ui-components > react-markdown",
      "@ojfbot/frame-ui-components > hast-util-to-jsx-runtime",
      "@ojfbot/frame-ui-components > style-to-js",
      "@ojfbot/frame-ui-components > style-to-object"
    ]
  },
  server: {
    port: 3030,
    fs: {
      allow: ["../../.."]
    }
  },
  preview: { port: 3030 },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMveXVyaS9vamZib3Qvc2VoLXN0dWR5L3BhY2thZ2VzL2Jyb3dzZXItYXBwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMveXVyaS9vamZib3Qvc2VoLXN0dWR5L3BhY2thZ2VzL2Jyb3dzZXItYXBwL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy95dXJpL29qZmJvdC9zZWgtc3R1ZHkvcGFja2FnZXMvYnJvd3Nlci1hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IGNzc0luamVjdGVkQnlKc1BsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1jc3MtaW5qZWN0ZWQtYnktanMnXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgLy8gY3NzSW5qZWN0ZWRCeUpzIE1VU1QgY29tZSBiZWZvcmUgZmVkZXJhdGlvbiBcdTIwMTQgb3RoZXJ3aXNlIHJlbW90ZSBDU1MgZG9lc24ndCBsb2FkIGluIHNoZWxsXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKHtcbiAgICAgIGpzQXNzZXRzRmlsdGVyRnVuY3Rpb246ICh7IGZpbGVOYW1lIH06IHsgZmlsZU5hbWU6IHN0cmluZyB9KSA9PlxuICAgICAgICBmaWxlTmFtZS5pbmNsdWRlcygnX19mZWRlcmF0aW9uX2V4cG9zZV8nKSxcbiAgICB9KSxcbiAgICBmZWRlcmF0aW9uKHtcbiAgICAgIG5hbWU6ICdzZWhfc3R1ZHknLFxuICAgICAgZmlsZW5hbWU6ICdyZW1vdGVFbnRyeS5qcycsXG4gICAgICBleHBvc2VzOiB7XG4gICAgICAgICcuL0Rhc2hib2FyZCc6ICcuL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3gnLFxuICAgICAgICAnLi9TZXR0aW5ncyc6ICcuL3NyYy9wYWdlcy9TZXR0aW5ncy50c3gnLFxuICAgICAgfSxcbiAgICAgIHNoYXJlZDoge1xuICAgICAgICByZWFjdDogeyBzaW5nbGV0b246IHRydWUsIHJlcXVpcmVkVmVyc2lvbjogJ14xOC4zLjAnIH0sXG4gICAgICAgICdyZWFjdC1kb20nOiB7IHNpbmdsZXRvbjogdHJ1ZSwgcmVxdWlyZWRWZXJzaW9uOiAnXjE4LjMuMCcgfSxcbiAgICAgICAgJ0ByZWR1eGpzL3Rvb2xraXQnOiB7IHNpbmdsZXRvbjogdHJ1ZSwgcmVxdWlyZWRWZXJzaW9uOiAnXjIuMC4wJyB9LFxuICAgICAgICAncmVhY3QtcmVkdXgnOiB7IHNpbmdsZXRvbjogdHJ1ZSwgcmVxdWlyZWRWZXJzaW9uOiAnXjkuMC4wJyB9LFxuICAgICAgICAnQGNhcmJvbi9yZWFjdCc6IHsgc2luZ2xldG9uOiB0cnVlLCByZXF1aXJlZFZlcnNpb246ICdeMS42Ny4wJyB9IGFzIGFueSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIC8vIFRyZWF0IGZyYW1lLXVpLWNvbXBvbmVudHMgYXMgc291cmNlIChmaWxlOiBsaW5rZWQsIG5vdCBwcmUtYnVpbHQpXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnQG9qZmJvdC9mcmFtZS11aS1jb21wb25lbnRzJ10sXG4gICAgLy8gQ0pTIHRyYW5zaXRpdmUgZGVwcyBvZiB0aGUgZXhjbHVkZWQgcGFja2FnZSBtdXN0IGJlIGV4cGxpY2l0bHkgaW5jbHVkZWRcbiAgICAvLyBzbyBWaXRlIHByZS1idW5kbGVzIHRoZW0gaW50byBFU00gXHUyMDE0IG90aGVyd2lzZSBicm93c2VycyBnZXQgQ0pTL0VTTSBtaXNtYXRjaC5cbiAgICBpbmNsdWRlOiBbXG4gICAgICAnQG9qZmJvdC9mcmFtZS11aS1jb21wb25lbnRzID4gcmVhY3QtbWFya2Rvd24nLFxuICAgICAgJ0BvamZib3QvZnJhbWUtdWktY29tcG9uZW50cyA+IGhhc3QtdXRpbC10by1qc3gtcnVudGltZScsXG4gICAgICAnQG9qZmJvdC9mcmFtZS11aS1jb21wb25lbnRzID4gc3R5bGUtdG8tanMnLFxuICAgICAgJ0BvamZib3QvZnJhbWUtdWktY29tcG9uZW50cyA+IHN0eWxlLXRvLW9iamVjdCcsXG4gICAgXSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAzMCxcbiAgICBmczoge1xuICAgICAgYWxsb3c6IFsnLi4vLi4vLi4nXSxcbiAgICB9LFxuICB9LFxuICBwcmV2aWV3OiB7IHBvcnQ6IDMwMzAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLE9BQU8sV0FBVztBQUNsQixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUVOLHNCQUFzQjtBQUFBLE1BQ3BCLHdCQUF3QixDQUFDLEVBQUUsU0FBUyxNQUNsQyxTQUFTLFNBQVMsc0JBQXNCO0FBQUEsSUFDNUMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLFFBQ1AsZUFBZTtBQUFBLFFBQ2YsY0FBYztBQUFBLE1BQ2hCO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixPQUFPLEVBQUUsV0FBVyxNQUFNLGlCQUFpQixVQUFVO0FBQUEsUUFDckQsYUFBYSxFQUFFLFdBQVcsTUFBTSxpQkFBaUIsVUFBVTtBQUFBLFFBQzNELG9CQUFvQixFQUFFLFdBQVcsTUFBTSxpQkFBaUIsU0FBUztBQUFBLFFBQ2pFLGVBQWUsRUFBRSxXQUFXLE1BQU0saUJBQWlCLFNBQVM7QUFBQSxRQUM1RCxpQkFBaUIsRUFBRSxXQUFXLE1BQU0saUJBQWlCLFVBQVU7QUFBQSxNQUNqRTtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBLEVBRUEsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLDZCQUE2QjtBQUFBO0FBQUE7QUFBQSxJQUd2QyxTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixPQUFPLENBQUMsVUFBVTtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxFQUFFLE1BQU0sS0FBSztBQUFBLEVBQ3RCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
