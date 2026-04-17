import {
  IconBrandGithub,
  IconMessageCircle,
  IconFile,
  IconTags,
  IconChevronRight,
  IconChevronLeft,
  IconHash,
} from "@tabler/icons-preact";

export const SITE = {
  title: "monukedayo",
  description: "日々の制作や考えたことを記録するブログ兼ポートフォリオサイトです。",
  author: "monuke",
  url: "https://monukedayo.com", // プレースホルダー
};

export const PROFILE = {
  name: "monuke-maho",
  bio: "もぬけです。駆け出してない系エンジニア志望無職です",
  github: "https://github.com/monuke-maho",
  misskey: "https://misskey.io/@mnkdayo",
};

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Tags" },
];

export const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    href: PROFILE.github,
    icon: IconBrandGithub,
    label: "GitHub",
  },
  {
    platform: "Misskey",
    href: PROFILE.misskey,
    icon: IconMessageCircle,
    label: "Misskey",
  },
];

export const BLOG = {
  indexTitle: "Blog",
  indexDescription: "日々の制作や考えたことの記録。",
  recentPostsTitle: "最近の投稿",
  allPostsTitle: "全ての投稿",
  allPostsButton: "全ての記事",
  tagsButton: "Tags",
};

export const TAGS = {
  indexTitle: "Tags",
  indexDescription: "興味のあるトピックから記事を探す。",
  allTagsTitle: "全てのタグ",
  listTitle: "記事一覧",
  backToAll: "All Tags",
};

export const UI = {
  backToHome: "Home",
  backToBlog: "Blog",
  previous: "PREVIOUS",
  next: "NEXT",
  relatedPosts: "関連する投稿",
  toc: "目次",
  noTags: "タグがありません。",
  articlesCount: (count: number) => `${count} 記事`,
  tagsCount: (count: number) => `${count} 個のタグ`,
  copyright: (year: number) => `© ${year} ${SITE.title}. All rights reserved.`,
  builtWith: "Built with Astro & Tailwind CSS.",
};
