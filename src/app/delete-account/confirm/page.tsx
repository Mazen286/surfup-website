import type { Metadata } from "next"
import { DeleteAccountConfirm } from "@/components/delete-account/delete-account-confirm"

export const metadata: Metadata = {
  title: "Confirm Account Deletion",
  description: "Confirm the deletion of your SurfUp account.",
  robots: { index: false, follow: false },
}

export default async function DeleteAccountConfirmPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { token } = await searchParams

  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-xl px-6 text-center">
        <DeleteAccountConfirm token={typeof token === "string" ? token : null} />
      </div>
    </section>
  )
}
