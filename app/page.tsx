import { Container } from '@/components/ui-kit/Container';
import { Logo } from '@/components/ui-kit/Logo';
import { SectionTitle } from '@/components/ui-kit/SectionTitle';
import { Socials } from '@/components/modules/Socials';

export default function Home() {
  return (
    // here below will be all the sections
    <section className="section bg-ui_dark">
      <Container>
        <h1 className="text-ui_light_16">Це секція приклад Roboto 16px 300</h1>
        <h1 className="font-ui_kurier text-ui_bold_20">
          It is an example section 20px 700 Kurier
        </h1>
        <h1 className="font-ui_kurier text-ui_reg_20">
          Це секція приклад 20px 400 Kurier
        </h1>

        <SectionTitle
          firstString="Подход"
          secondString="к работе"
          position="left"
        />
        <SectionTitle
          firstString="Услуги"
          secondString="и цены"
          position="right"
        />
        <SectionTitle
          firstString="Клиенты"
          secondString="обо мне"
          position="left"
        />
        <SectionTitle
          firstString="Форма"
          secondString="для связи"
          position="right"
        />

        <Logo />
        <p className="text-ui_accent_transparent_40">MENU SOCIALS:</p>
        <Socials section="menu" />
        <p className="text-ui_accent_transparent_40">HERO SOCIALS:</p>
        <Socials section="hero" />
        <p className="text-ui_accent_transparent_40">FOOTER SOCIALS:</p>
        <Socials section="footer" />
      </Container>
    </section>
  );
}
