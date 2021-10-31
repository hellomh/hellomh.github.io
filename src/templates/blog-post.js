import React from 'react';
import {Link, graphql} from 'gatsby';
import get from 'lodash/get';
import '../fonts/fonts-post.css';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Panel from '../components/Panel';
import {formatPostDate, formatReadingTime} from '../utils/helpers';
import {rhythm, scale} from '../utils/typography';
import {codeToLanguage, replaceAnchorLinksByLanguage} from '../utils/i18n';

const systemFont = `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`;

class Translations extends React.Component {
  render() {
    let {translations} = this.props;

    return (
      <div className='translations'>
        <Panel style={{fontFamily: systemFont}}>
          {translations.length > 0 && (
            <span>
              <span>Supported translations: </span>
              {translations.map((translation, i) => (
                <React.Fragment key={translation.lang}>
                  <Link to={translation.path}>{translation.lang}</Link>
                  {i === translations.length - 1 ? '' : ' • '}
                </React.Fragment>
              ))}
            </span>
          )}
        </Panel>
      </div>
    );
  }
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    const lang = post.fields.langKey;
    let {translations, translatedLinks} = this.props.pageContext;

    // Replace original links with translated when available.
    let html = post.html;

    translatedLinks.forEach(link => {
      function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      let translatedLink = '/' + lang + link;
      html = html.replace(
        new RegExp('"' + escapeRegExp(link) + '"', 'g'),
        '"' + translatedLink + '"'
      );
    });

    const pathWithoutLang = post.fields.slug.replace(`/${lang}/`, '');
    translations = translations
      .filter(translation => translation != lang)
      .sort((a, b) => {
        return codeToLanguage(a) < codeToLanguage(b) ? -1 : 1;
      })
      .map(translation => ({
        path: `/${translation}/${pathWithoutLang}`,
        lang: codeToLanguage(translation),
      }));

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          lang={lang}
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <main>
          <article>
            <header>
              <h1 style={{color: 'var(--textTitle)'}}>
                {post.frontmatter.title}
              </h1>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: 'block',
                  marginBottom: rhythm(1),
                  marginTop: rhythm(-4 / 5),
                }}
              >
                {formatPostDate(post.frontmatter.date, lang)}
                {` • ${formatReadingTime(post.timeToRead)}`}
              </p>
              {translations.length > 0 && (
                <Translations translations={translations} />
              )}
            </header>
            <div dangerouslySetInnerHTML={{__html: html}} />
          </article>
        </main>
        <aside>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: rhythm(0.25),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'var(--yellow)',
              }}
              to={`/${lang}`}
            >
              hellomh
            </Link>
          </h3>
          <Bio />
        </aside>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
      }
      fields {
        slug
        langKey
      }
    }
  }
`;
