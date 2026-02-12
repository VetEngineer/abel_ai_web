import { SITE, NAV_ITEMS } from "@/constants/content";

export function Footer() {
  const { business } = SITE;

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <span className="text-lg font-bold text-gradient">{SITE.name}</span>
            <p className="mt-1 text-sm text-muted-foreground">
              {SITE.tagline}
            </p>
          </div>

          <nav className="flex gap-6" aria-label="푸터 내비게이션">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 사업자 정보 */}
        <div className="mt-8 border-t border-border pt-8 space-y-1 text-xs text-muted-foreground text-center">
          <p>
            <span>{business.corporateName}</span>
            <span className="mx-1.5">|</span>
            <span>대표: {business.representative}</span>
          </p>
          <p>
            <span>사업자등록번호: {business.registrationNumber}</span>
            <span className="mx-1.5">|</span>
            <span>법인등록번호: {business.corporateRegistrationNumber}</span>
          </p>
          <p>
            <span>본점: {business.address}</span>
          </p>
          <p>
            {business.branches.map((branch, i) => (
              <span key={branch.name}>
                {i > 0 && <span className="mx-1.5">|</span>}
                <span>{branch.name}: {branch.location}</span>
              </span>
            ))}
          </p>
          <p>{business.email}</p>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
