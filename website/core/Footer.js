/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Documentation</h5>
            <a href={this.docUrl('about.html', this.props.language)}>
              About
            </a>
            <a href={this.docUrl('gettingStarted.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('configuration.html', this.props.language)}>
              Configuration
            </a>
            <a href={this.docUrl('setup.html', this.props.language)}>
              Setup
            </a>
            <a href={this.docUrl('api.html', this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="http://stackoverflow.com/questions/tagged/lexjs"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a>
            <a href={this.props.config.chatUrl}>Project Chat</a>
            <a
              href="https://www.facebook.com/nitrogenlabs"
              target="_blank"
              rel="noreferrer noopener">
              Facebook
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.npmUrl}>NPM</a>
            <a href={this.props.config.repoUrl}>GitHub</a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
