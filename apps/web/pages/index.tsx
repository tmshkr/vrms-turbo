import Head from "next/head";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Meetbot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-lg m-auto px-6 py-8 bg-indigo-200 rounded-md shadow-md">
        <h1 className="text-center">Welcome to Meetbot!</h1>
        <p>Meetbot helps you run group meetings in Slack.</p>
        <p>
          It provides useful tools for organizations, like Google Calendar
          integration, role-based access control, automated meeting checkins,
          and an enhanced workspace directory that stays in sync with your Slack
          users.
        </p>
        <p>
          Ready to get started? You can <a href="/slack/install">add meetbot</a>{" "}
          to your Slack workspace, join the{" "}
          <a
            target="_blank"
            rel="noopener noreferer"
            href="https://join.slack.com/t/meetbot-hq/shared_invite/zt-1dlft3msj-pFun_ML7fDHXywkTelYGRw"
          >
            meetbot community
          </a>{" "}
          to try it out first, or even run your own{" "}
          <a
            target="_blank"
            rel="noopener noreferer"
            href="https://meetbot.dev"
          >
            meetbot server
          </a>
          .
        </p>
        <a href="/slack/install">
          <img
            alt="add to slack"
            className="mt-12 mx-auto"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>
      </div>
    </>
  );
};

export default LandingPage;
