<script setup lang="ts">
import Announcement from '@/shared/components/AnnouncementSection.vue'
import PostCard from '@/shared/components/PostCard.vue'
import { EditorialSection, GridSection, HeroSection } from '../components'
</script>

<template>
  <main class="flex-grow">
    <HeroSection />

    <GridSection>
      <PostCard
        slug="investimento-imobiliario-bairros-destaques"
        title="Investimento Imobiliário - Bairros que são destaques"
        category="Imóveis"
        description="Especialistas apontam as regiões com maior potencial de valorização a médio e longo prazo."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD7YZNphE8gs_oGbewZYNd7DCrxd6C0TFIIOwolRmhBI5Pu5j31veS59ZVBI8Bmx66vDVwIrnHoNHu-fSAORv-B3omlPh0T_pwrVrrvFTE78FrEYh963FPx4AjdO1GPIbjjF3eEK_tdTi156ozMTHUcJbNakoEYPBhcQZA56KhpOyHgUYVG6oWNrA7MoGEKo1HF766IWSx248xrpUHPuIBIOOP3GALto8PvHEKFYjEUWk11e0G8_f4sNUSZsUWWdFf1q1ApzMrLz-ZB"
      />

      <PostCard
        slug="caparao-jazz-blues-combinacao-perfeita"
        title="Caparaó, jazz e blues uma combinação perfeita"
        category="Cultura"
        description="Festival atrai milhares de turistas e movimenta a economia local com música de alta qualidade."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCyxBwnGBzUxQbRzjJA5Y_d3DT0EqZyOsLb9uF1_IvwCEK-1k2CTGkL90UhwwQv0sDMibs8vrpHyfXh57UhF9CdT4IdAm54uXNdavv8ebMeJGBbmn5PXmcXeHlj_r2Ffa7IF-dtC3lX9UgS6dKg0oVMLFmWK29Ai0D5xt4EHC9AjXt9D5YYGKWpgfVASToeUAAt2dZIoRiLLzJvws3r-xvaFAhT5zLaZXaR7sa7XsDv9TmRdAUsUuRM8FDoWk9FkUbyqKkOYZLEgw42"
      />

      <PostCard
        slug="esg-significado-importancia"
        title="ESG: O que significa a sigla e porque ela é tão importante"
        category="Negócios"
        description="Entenda como critérios ambientais, sociais e de governança estão remodelando o mercado corporativo."
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDZLY-lTvFGbTomGlyKTIPxmbV5DeXR1IQWot64UGKVmoGWzFGB1DH7jVSAuDFpRWNIU0Btpb5WRZQ0_wmqdxXEJbuQKTJIM3cZ_TPe7Ct1lOhedCs4PjD5Fw97amY7_scMC658Z7_VsfSGkCFaVGYqRbMEou2NkEaAQp6o2Wj1FTOLP9xpEl-0ZicuciiupmOxsB_YJGwLt5KP7LjQvTZ0_kPIT3UwUz19gD2jlDyazA54EA56o-Jyo-1WoCl-wLQFXnwMC_CK5De5"
      />

      <PostCard
        slug="apos-a-quarta-reducao-nas-refinarias-gasolina"
        title="Após a quarta redução nas refinarias, gasolina..."
        category="Economia"
        description=""
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAdi1rNch3iN0TIG4DjMxErdaCNTyEWiBWvdkWntZgJUHCmgC1PIJXBxzmy2AMcE_vhu3KLMM999-8dSq834ANMOwu828qmmki9Z-qGxz8EtnZmWMzAm9udu2JnMRkGSFApuglFGaLaXs364w6IBm_1a3qDJiR8sIVp-UH8PqzQFh4ViT2HEWhUrjhkN-FdewwYjgCHwuYsbgH13h8bk1x7qW8VGDVEs0l8lMTUvtROEnTHTDvp3ShWB7sJUeSsvKI__My0EETkcC9s"
      />

      <PostCard
        slug=""
        title="Supremo admite 'confusão' processual e volta atrás em..."
        category="Política"
        description=""
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAAtllgjey8x77bwymk8rxWAeVmk7IhXmM07ES2SdIGPftoPS2pue-eCDWTsMOkKOuKEsPSuYlFlNn0TNwbSTK2toFy7AOcFFIaMuXtIzzIP95L4LkuTGgJTWCzQmSHFHAM2AkNbtPqGRrVRzmVNWrfcYjH6X-aCZxPhRn4CG2SXhIQZbKaj6Wu3u0JEqRdUU60T2Xsu8u3IsgKIKuLSjZVpvErP2_GpZANwbiy29sX1z094uhX1yAFSqDU25Ich17hLv-Leq0hYKx2"
      />

      <PostCard
        slug=""
        title="Brasil é eleito o melhor destino da América do Sul para..."
        category="Turismo"
        description=""
        imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBzE03zqSEvYVOGLUH70g_yob0qqlfW08cnV388W9Hpj4JhxjlG1AUdCT4sHpsgNeLh3DlCHfhERqmEoU3M5VF2Z8piDz91eYZXFevnICHe4bjjmmLPUABKJOY9GzeiZnpXnJvRQiKQ04d0gvNY0gPtFkpyb-MVfJkWMartWL1elebRD3aedjeYifqw4ItRcOVj8LH3SZ8hv-S30G8LLAe8qSruNviXi5bCChX2qACcxo70nOo00g660C59FBSAPQOvbdaMlbR6hGpI"
      />
    </GridSection>

    <EditorialSection>
      <!-- Main Content Area -->
      <div class="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <!-- Block 1 -->
        <div class="bg-surface-container-low p-stack-md border-t-4 border-secondary rounded-b-lg">
          <h3 class="font-headline-md text-headline-md text-primary mb-stack-sm">
            MERCADO DE VEÍCULOS NOVOS CRESCE 22%
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant mb-stack-sm">
            O mercado de veículos novos no Brasil tem crescido em março a um ritmo de 22%. A
            variação, referente ao número de unidades vendidas, foi divulgada nesta sexta-feira pela
            associação do setor.
          </p>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            A principal divergência em torno do programa se deve ao incentivo fiscal que o governo
            dará para as montadoras investirem em pesquisa e desenvolvimento, aquecendo debates no
            senado.
          </p>
        </div>
        <!-- Block 2 -->
        <div class="bg-surface-container-low p-stack-md border-t-4 border-primary rounded-b-lg">
          <h3 class="font-headline-md text-headline-md text-primary mb-stack-sm">
            PROJETO DE LEI QUER SUBSTITUIR DPVAT
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant mb-stack-sm">
            Com o escândalo das fraudes, um Projeto de Lei quer implementar um novo sistema para a
            cobrança do seguro obrigatório contra acidentes de trânsito. A ideia é que os motoristas
            possam escolher sua seguradora.
          </p>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            Uma Comissão Parlamentar de Inquérito (CPI) foi aberta para investigar o esquema. O
            pagamento continuará sendo obrigatório e cobrirá indenizações por morte e invalidez
            permanente.
          </p>
        </div>
      </div>

      <!-- Sidebar / Ad Space -->
      <aside class="w-full lg:w-1/3 flex flex-col gap-stack-md">
        <div
          class="w-full aspect-[300/250] bg-surface-container border border-outline-variant flex items-center justify-center text-on-surface-variant font-label-lg rounded"
        >
          <span class="">Anúncio</span>
        </div>
        <div class="w-full bg-primary text-on-primary p-stack-md rounded text-center">
          <h4 class="font-headline-sm text-headline-sm mb-2">Conecta Cidadão</h4>
          <p class="font-body-sm text-body-sm opacity-90">
            Informações sobre todos os serviços do Governo do Estado em um único endereço.
          </p>
          <button
            class="mt-stack-sm px-4 py-2 bg-secondary text-secondary-fixed font-label-lg rounded hover:bg-yellow-500 transition-colors"
          >
            Acessar Portal
          </button>
        </div>
      </aside>
    </EditorialSection>

    <Announcement />

    <!-- <section
      class="w-full bg-surface-container-lowest border-t border-outline-variant py-section-padding"
    >
      <div class="max-w-container-max mx-auto px-margin-x">
        <div class="text-center mb-stack-lg">
          <h2
            class="font-display-lg text-display-lg text-primary uppercase tracking-widest relative inline-block"
          >
            Turistando
            <span
              class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-secondary rounded-full"
            ></span>
          </h2>
        </div>
        <div
          class="bg-surface-bright border border-surface-variant rounded-xl overflow-hidden shadow-sm"
        >
          <div
            class="p-stack-lg text-center bg-surface-container-low border-b border-surface-variant"
          >
            <h3 class="font-headline-lg text-headline-lg text-primary mb-stack-sm">
              CONVENTO DA PENHA
            </h3>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl mx-auto italic">
              Uma ótima opção para quem visita ou até mesmo mora no Espírito Santo é conhecer o
              Convento da Penha, um dos pontos turísticos referência no estado, reconhecido em todo
              o Brasil. Fica a dica!
            </p>
          </div>
          <div class="w-full h-[50vh] min-h-[300px]">
            <img
              class="w-full h-full object-cover"
              data-alt="A spectacular wide landscape shot of the Convento da Penha situated on top of a prominent, lush green rocky hill. Below, a wide blue river flows, spanned by a long, modern bridge leading to a dense city skyline on the opposite bank. The sky is a clear, brilliant blue, emphasizing the dramatic elevation and historical significance of the convent overlooking the modern urban landscape."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhEOHMud0GfzNpR-VEkDPGrJG5KblNWDxrHlF8M-kfwJ2GIx_o5b8DYDpFoIOnPSVpqq3vnxmV_sqmY_kEltlV5M5_HaPLnqN4y6TqSh7SNOkqZm7RsNm0ftMd8zL8KYYGjUaEULecCTmH5HuCH1pXULXX1rB8YrhqaYUjDIWvg6sv1pv4aJ90_JBCMNClf2Yd8XA0PI-LF4bX6B2e4pB8X5RIuvqOzqUVcv6i0GQWsnmXm9_Qe6w795WwjazCnjyttJhcdg-qsHE2"
            />
          </div>
          <div class="p-stack-lg flex flex-col lg:flex-row gap-gutter">
            <div class="w-full lg:w-2/3">
              <h4 class="font-headline-md text-headline-md text-primary mb-stack-sm">
                Conhecendo o convento
              </h4>
              <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                Há 154 metros de altitude e localização privilegiada a 500 metros do mar – que
                ostenta no seu entorno imponente fragmento da mata atlântica, está edificado o
                Santuário de Nossa Senhora da Penha, fundado por Frei Pedro Palácios, que aqui
                chegou em 1558.
              </p>
              <p class="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                O monumento arquitetônico, peculiar na singeleza e sobriedade, apresenta em sua
                trajetória histórica muitas reconstruções como a excepcional concepção do Convento,
                na rocha do morro, abrindo as janelas de suas celas para o magnífico panorama da
                barra de Vitória e do oceano Atlântico, enquanto de sua fachada se tem bela vista
                panorâmica de Vila Velha.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-stack-md mt-stack-lg">
                <img
                  class="w-full h-48 object-cover rounded shadow-sm border border-outline-variant"
                  data-alt="A high-contrast, historical black and white photograph showcasing an early architectural phase of a stone convent complex. The building is simple and austere, with small windows and a prominent cross. In the foreground, tall, mature palm trees flank the structure, emphasizing its age and establishment in a tropical environment. The aesthetic is documentary and archival."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaRdNB3iEbrW2WYM8zaqz3d4UpVrNigQl_PoM4ibkID0EZwKACUkdnz8mQ75iBQjWFqWBLq_8xxXQvMrXMz8xTzDBnDHnQGL4R6WMakI3NJ3_ndKdvMY0jvj3wfME9sKuAXmxlLHiph3mLjEei2k59CykTWXvldxStUpoA9mGUYEnW0Sze8CtUqwXDVDjkx4hK2OKOFW58k1YJqFWE2k2W7RITG6pHyQPI7-4vgshcZTGTmbvRgTUZEMZWvbTA078Fg8-7Gd_0YpPM"
                />
                <img
                  class="w-full h-48 object-cover rounded shadow-sm border border-outline-variant"
                  data-alt="An interior photograph of a richly decorated, ornate chapel nave. The altar is bathed in warm, golden light illuminating intricate, gilded wood carvings and religious iconography. The overall atmosphere is reverent, historic, and opulent, showcasing the baroque or colonial artistry preserved within the sanctuary."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC44t3uDC5XVPpIr8e_8-h3p5ReukeuAMsoUq3Jn1DgKcNgW8rn_AZw3YgqOvotioBN7K_KeLPI3GHrZ_mzCEgt-b26IZBMxHyUXYLqoP4LeVun7bBY_r4ZwXoav4mE9-9xR7wQGot4SBIQMokEI5K19sMHd4MLXWmh-6-TW1tHSdqBl9mP8thtUmZGRWRnEi0-wRc_ZEJQdHCwsytxEIgsuSCWBjRCGEOgBHW_HM5aMgxWd40-dG-jZacGiq-2QhaUnxlsI3rJHLHK"
                />
              </div>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col gap-stack-md">
              <div
                class="bg-surface p-stack-md border border-surface-variant rounded h-full flex flex-col justify-center text-center"
              >
                <h5 class="font-headline-sm text-headline-sm text-primary mb-2">
                  10 VEZES CAMPEÃ!
                </h5>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Santa Catarina: eleito como o Melhor Estado do Prêmio Viagem e Turismo
                </p>
                <img
                  class="w-full h-32 object-cover mt-stack-sm rounded"
                  data-alt="A vibrant, stylized promotional graphic featuring stylized text '10 VEZES CAMPEÃ!' against a backdrop of iconic Brazilian tourist landmarks like colorful colonial houses and beaches. The design is energetic and celebratory, acting as a travel advertisement within a news context."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnSPX37CrZwdKw8RkrJODWvXDavPUO36rouPu9nd4rSDN6d5olDH1faq536SXaqwr3iVv3yIB9bUmq0Aa0uV4Ic0nN03TGADmGMNPs7shP1u0ongmrwGqy-UGp886V4W_gK3HuXAgbHGZUEulzpkzIONqe80bKFALIv1AVpbYaKr-eDPX4VcK4Ki31bha5iz9187GCrH2EjmemEa3yAAwQZ2trzUHBq-afbSrB3nAzOCI0vHj3DruDfu0NXKEb3Kg76knZxTja4Hvq"
                />
              </div>
              <div
                class="bg-surface p-stack-md border border-surface-variant rounded h-full flex items-center justify-center"
              >
                <img
                  class="w-full h-full object-cover rounded"
                  data-alt="A bright, inviting advertisement image for a modern beachfront resort. The photo shows a luxurious swimming pool area with sun loungers, surrounded by tropical landscaping, with the ocean visible in the background under a sunny sky. A small logo and phone number are subtly overlaid."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL0vhtTi4XmeSrUorGoO22SlEVF-QYhngDR6mfHWwGTmEhKpvKz7w2mHupSoAuImi3c11bBcosz0ilaRIwf_q5dwoCKeb6Pw3tsffAbxa2qdnICOb4Oq6XXppRrs9b5GmFakJ3TE5tkfe6g08BF1vPtCuEkNwUopbMyj1TYFuFFTxVHwrA3aHhvAC2jsLO6Foralgj5EE9SnZc_fEtE6O4AbFdMEpEKp9wwH_-Tc7-Tmb2PaYjvrFtH3ivS1S7XX6vZv79PqGf9M5E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </main>

  <!-- <Announcement /> -->
</template>
