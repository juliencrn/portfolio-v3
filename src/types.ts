export interface Project {
  title: string;
  excerpt: string;
  createdAt: string;
  tags: string[];
  demoUrl?: string;
  srcUrl?: string;
  /** Displayed in the "featured" section */
  featured?: boolean;
  /** Un-finished project aren't published on the website */
  unFinished?: boolean;
  /** Am I working on currently? If true, displayed in the "current" section */
  currently?: boolean;
}
