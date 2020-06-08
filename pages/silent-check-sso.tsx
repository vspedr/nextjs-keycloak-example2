export default () => (
  <script
    dangerouslySetInnerHTML={{
      __html: "parent.postMessage(location.href, location.origin)",
    }}
  />
);
