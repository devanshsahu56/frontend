
import Wrapper from "@/components/wrapper/Wrapper";
export const metadata = {
  title: "Internshala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
