import Head from "next/head";

export default ({ title = "", setting }) => {
  return (
    <Head>
      <title>
        {title} | {setting.sitename}
      </title>
      <meta name="viewport" content="width=device-width" />
      <link rel="shortcut icon" href="/logo.ico" />
      <meta name="keywords" content={setting.keywords}></meta>
      <meta name="description" content={setting.description}></meta>
      <script
        dangerouslySetInnerHTML={{
          __html: `var _hmt = _hmt || [];
                  (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?0e461400c149186e46be66ffea5f1a80";
                    var s = document.getElementsByTagName("script")[0]; 
                    s.parentNode.insertBefore(hm, s);
                  })();
                  `,
        }}
      ></script>
    </Head>
  );
};
