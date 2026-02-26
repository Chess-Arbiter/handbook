import MainLayout from "../../../layouts/MainLayout";

export default function RatingCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout currentPageParent="">{children}</MainLayout>;
}
