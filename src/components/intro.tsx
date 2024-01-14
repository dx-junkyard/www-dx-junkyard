const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        dx-junkyard
      </h1>
      <h4 className="text-left text-lg mt-5 md:pl-8">
        日本全国の有志メンバーが集い、様々なハッカソンなどに挑戦中です。
        <br />
        主にGitHub{"("}
        <a
          href="https://github.com/dx-junkyard"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          dx-junkyard
        </a>
        {")"}で活動しています。
        <br />
        <br />
        参加をご希望の場合は、GitHub上でご連絡をお願いいたします。
      </h4>
    </section>
  );
};

export default Intro;
