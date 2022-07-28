/**
 * Global application config file
 */
const appConfig = {
  postsPerPage: 9,
  /**
   * Displays a default Featured Image when a Post does not have one
   */
  archiveDisplayFeaturedImage: true,
  themeColor: 'red',
  /**
   * @type {[key: 'twitterUrl' | 'facebookUrl' | 'instagramUrl' | 'youtubeUrl' | 'githubUrl' | 'linkedinUrl']: string}
   */
  socialLinks: {
    twitterUrl: 'https://twitter.com/ianmckayux',
    instagramUrl: 'https://www.instagram.com/iancmckay_/',
    githubUrl: 'https://github.com/wpengine',
    linkedinUrl: 'https://www.linkedin.com/company/wpengine',
  },
};

export default appConfig;
