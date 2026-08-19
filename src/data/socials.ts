type SocialProps = {
  [key: string]: string;
};

export const socials: SocialProps = {
  Github: import.meta.env.VITE_GITHUB,
  LinkedIn: import.meta.env.VITE_LINKEDIN,
  LeetCode: import.meta.env.VITE_LEETCODE,
};
