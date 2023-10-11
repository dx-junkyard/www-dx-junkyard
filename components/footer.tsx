import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h2 className="text-xl font-bold">メンバー</h2>
            <ul className="list-disc text-left">
              <li>もっちゃん</li>
              <li>
                <a
                  href="https://github.com/urashin"
                  className="text-red-600 underline"
                >
                  urashin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/FooQoo"
                  className="text-red-600 underline"
                >
                  FooQoo
                </a>
              </li>
              <li>Y.Saito</li>
              <li>ふくもと</li>
              <li>Yamamoto</li>
              <li>Kay</li>
              <li>
                <a
                  href="https://github.com/Mitsuo-Koikawa"
                  className="text-red-600 underline"
                >
                  Mitsuo-Koikawa
                </a>
              </li>
            </ul>
          </div>
          <div className="tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <h2 className="text-xl font-bold">協力団体</h2>
            <ul className="list-disc text-left">
              <li>CodeForJapan 武蔵野/三鷹</li>
              <li>Vizzie + オープンデータスゴイ</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="text-center my-4">&copy; 2023 dx-junkyard</div>
    </footer>
  );
};

export default Footer;
