# Components (TSX)

Next.js App Router, Tailwind v4, `.tsx` only. Icons: [icons-and-emoji.md](./icons-and-emoji.md).

---

## LoadingBlock

```tsx
export function LoadingBlock({ className = "h-4 w-full" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-[var(--border)]/70 motion-reduce:animate-none ${className}`}
      aria-hidden="true"
    />
  );
}
```

---

## DocCardSkeleton

```tsx
export function DocCardSkeleton() {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6" aria-hidden="true">
      <LoadingBlock className="h-5 w-2/3" />
      <LoadingBlock className="mt-3 h-4 w-full" />
      <LoadingBlock className="mt-2 h-4 w-4/5" />
      <div className="mt-4 flex gap-2">
        <LoadingBlock className="h-6 w-14 rounded-full" />
        <LoadingBlock className="h-6 w-16 rounded-full" />
      </div>
    </div>
  );
}
```

---

## DetailSkeleton

```tsx
export function DetailSkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      <LoadingBlock className="h-8 w-1/2" />
      <LoadingBlock className="h-4 w-full" />
      <LoadingBlock className="h-4 w-full" />
      <LoadingBlock className="h-4 w-3/4" />
      <LoadingBlock className="mt-6 h-32 w-full rounded-xl" />
    </div>
  );
}
```

---

## DocCard

```tsx
import Link from "next/link";

type DocCardProps = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export function DocCard({ title, summary, tags, href }: DocCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-sm motion-reduce:transform-none">
      <h2 className="text-lg font-semibold tracking-tight text-balance">
        <Link href={href} className="focus-visible:outline-2 focus-visible:outline-offset-2">
          {title}
        </Link>
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{summary}</p>
      <TagRow tags={tags} className="mt-4" />
      <Link
        href={href}
        className="mt-6 inline-block text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        View
      </Link>
    </article>
  );
}
```

---

## TagRow

```tsx
export function TagRow({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
```

---

## PlainButton

```tsx
type PlainButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  look?: "solid" | "ghost";
};

export function PlainButton({ look = "solid", className = "", ...rest }: PlainButtonProps) {
  const base =
    "rounded-xl px-4 py-2 text-sm font-medium duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50";
  const lookClass =
    look === "solid"
      ? "border border-[var(--border)] bg-[var(--surface)] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
      : "text-[var(--muted)] hover:text-[var(--text)]";
  return <button type="button" className={`${base} ${lookClass} ${className}`} {...rest} />;
}
```

---

## ContentWidth

```tsx
export function ContentWidth({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-3xl px-4 py-16 md:px-8 md:py-24 ${className}`}>{children}</div>
  );
}
```

---

One file per component in `src/components/`.
</think>


I made another typo in ContentWidth. Fix it.
</think>


<｜tool▁calls▁begin｜><｜tool▁call▁begin｜>
StrReplace