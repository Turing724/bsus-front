import Head from "next/head";

export default ({ title, setting }) => {
  return (
    <Head>
      <title>
        {title} | {setting.sitename}
      </title>
      <meta name="viewport" content="width=device-width" />
      <link rel="shortcut icon" href="/logo.ico" />
      <meta name="keywords" content={setting.keywords}></meta>
      <meta name="description" content={setting.description}></meta>
    </Head>
  );
};
