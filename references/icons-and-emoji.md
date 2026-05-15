# Icons and emoji

Single source for UI icon rules. Do not repeat this in other refs.

## Default: react-icons

Use **react-icons** for nav, buttons, theme toggle, copy, search, etc.

```bash
pnpm add react-icons
```

```tsx
import { HiOutlineMoon } from "react-icons/hi2";
```

- One icon library only (do not mix with lucide, heroicons, etc.)
- Icon-only buttons need `aria-label`

## Optional: emoji picker (only if user asks)

Use [Emoji Mart](https://learn.missiveapp.com/open/emoji-mart) when the product needs a picker (tags, reactions, skill labels).

```bash
pnpm add @emoji-mart/react @emoji-mart/data
```

```tsx
"use client";

import dynamic from "next/dynamic";
import data from "@emoji-mart/data";

const Picker = dynamic(() => import("@emoji-mart/react"), { ssr: false });

export function EmojiPicker({ onSelect }: { onSelect: (emoji: { native: string }) => void }) {
  return (
    <Picker
      data={data}
      set="apple"
      theme="auto"
      onEmojiSelect={onSelect}
    />
  );
}
```

| Setting | Value |
|---------|--------|
| **set** | `apple` (Apple-style glyphs; matches doc UI tone) |
| **theme** | `auto` (follows light/dark) |

Do not add Emoji Mart unless the user wants emoji selection. Stick to react-icons otherwise.

## Do not

- Mix multiple icon libraries
- Use emoji Mart for static nav icons (use react-icons)
- Use random emoji fonts in CSS when user asked for the picker (use Mart)
