<template>
  <div>
    <Navbar />
    <HeaderSection />
    <PortofolioSection />
    <ProductSection />
    <AnnouncementSection />
    <SertifikasiSection />
    <QualityAssurance />
    <ProductionSection />
    <MitraSection />
    <BenefitSection />
    <RewardSection />
    <ProductVariantSection />
    <ArtikelSection />
    <PartnershipBanner />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import HeaderSection from '~/components/organism/HeaderSection'
import PortofolioSection from '~/components/organism/PortofolioSection'
import ProductSection from '~/components/organism/ProductSection'
import AnnouncementSection from '~/components/organism/AnnouncementSection'
import SertifikasiSection from '~/components/organism/SertifikasiSection'
import QualityAssurance from '~/components/organism/QualityAssuranceSection'
import ProductionSection from '~/components/organism/ProductionFlowSection'
import MitraSection from '~/components/organism/MitraSection'
import BenefitSection from '~/components/organism/BenefitSection'
import RewardSection from '~/components/organism/RewardSection'
import ProductVariantSection from '~/components/organism/ProductVariantSection'
import ArtikelSection from '~/components/organism/ArtikelSection'
import PartnershipBanner from '~/components/PartnershipBanner'
import Footer from '~/components/Footer'

export default {
  name: 'IndexPage',
  components: {
    Navbar,
    HeaderSection,
    PortofolioSection,
    ProductSection,
    AnnouncementSection,
    SertifikasiSection,
    QualityAssurance,
    ProductionSection,
    MitraSection,
    BenefitSection,
    RewardSection,
    ProductVariantSection,
    ArtikelSection,
    Footer,
    PartnershipBanner,
  },
}
</script>

<style>
body {
  background: linear-gradient(
    180deg,
    rgba(246, 176, 6, 0.06) 0%,
    rgba(246, 178, 5, 0) 100%
  );
}
</style>
