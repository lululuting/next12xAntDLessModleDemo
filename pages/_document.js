import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps}
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    document.documentElement.setAttribute('theme', newTheme)
                    // if (newTheme === 'dark') {
                    //   document.documentElement.setAttribute('theme', 'dark')
                    //   // document.documentElement.classList.add('dark');
                    // } else if (newTheme === 'light') {
                    //   // document.documentElement.classList.remove('dark');
                    //   document.documentElement.setAttribute('theme', 'light')
                    // }
                  }
                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }
                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };
                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);
                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });
                })();
              `,
            }}
          />
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument