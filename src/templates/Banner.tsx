import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="Masz pomysł? Zrealizujmy go razem!"
      subtitle="Napisz do nas i zacznijmy współpracę."
      button={
        <Link href="#kontakt">
          <Button>Skontaktuj się</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
