interface LegalDoc {
  type: string
  version: string
  content: string
  updatedAt?: string
}

export async function LegalPage({
  title,
  type,
}: {
  title: string
  type: string
}) {
  let doc: LegalDoc | null = null

  try {
    const res = await fetch(
      `https://surfup.azurewebsites.net/api/v1/legal/${type}`,
      { next: { revalidate: 86400 } }
    )
    if (res.ok) {
      doc = await res.json()
    }
  } catch {}

  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-ocean-950 sm:text-4xl">
          {title}
        </h1>
        {doc && (
          <p className="mt-2 text-sm text-ocean-700">
            Version {doc.version}
            {doc.updatedAt && (
              <>
                {" "}&middot; Updated{" "}
                {new Date(doc.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </>
            )}
          </p>
        )}
        <div
          className="prose prose-ocean mt-8 max-w-none text-ocean-700 [&_h4]:text-lg [&_h4]:font-bold [&_h4]:text-ocean-950 [&_strong]:text-ocean-900 [&_ul]:list-disc [&_ul]:pl-6 [&_p]:leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: doc?.content ?? "<p>Content unavailable. Please try again later.</p>",
          }}
        />
      </div>
    </section>
  )
}
