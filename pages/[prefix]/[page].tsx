import Head from "next/head";

export default function PageContent() {
  return (
    <>
      <Head>
        <title>Title</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <h1>Page Title</h1>
      <h2>Subtitle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        reiciendis ex, voluptas eius, officia mollitia nobis expedita natus est
        qui, ipsa quaerat quas dicta laboriosam vitae temporibus inventore
        dolores consectetur?
      </p>
    </>
  );
}
