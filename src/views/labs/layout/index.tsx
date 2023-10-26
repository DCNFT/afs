const Layout = () => {
  return (
    <div className="mx-auto max-w-full w-[1440px] flex flex-col gap-5xl px-md py-xl desktop:px-[128px] tablet:px-[64px] mobile:px-md">
      <section className="relative flex h-[clamp(710px,40vw,75vw)] w-full items-center justify-between tablet:h-auto tablet:flex-col-reverse tablet:items-center tablet:justify-start">
        <div className="absolute z-1 flex w-full flex-col gap-md tablet:static tablet:w-full tablet:items-center">
          <h1
            className="heading text-[64px] font-semibold leading-tight tracking-tight desktop:text-[54px] tablet:text-center tablet:text-xxl mobile:text-[28px]"
            style={{ opacity: 1, transform: 'translateY(0px) translateZ(0px)' }}
          >
            Your gateway to <br className="tablet:hidden" />
            the <br className="hidden mobile:block" />
            decentralized <br className="tablet:hidden" />
            universe
          </h1>
          <div
            className="flex flex-col gap-md pb-3xs tablet:flex-row mobile:flex-col mobile:items-center"
            style={{ opacity: 1, transform: 'translateY(0px) translateZ(0px)' }}
          >
            <a href="/quests">
              <button className="stitches-c-ikZMpV stitches-c-ikZMpV-cgkpnU-isLoading-undefined stitches-c-ikZMpV-lhXyu-color-primary stitches-c-ikZMpV-kRCPxh-size-xl stitches-c-ikZMpV-lbczQP-size-md stitches-c-ikZMpV-iezwQgf-css">
                Get started
              </button>
            </a>
            <a href="/business">
              <button className="stitches-c-ikZMpV stitches-c-ikZMpV-cgkpnU-isLoading-undefined stitches-c-ikZMpV-hckxRC-color-secondary stitches-c-ikZMpV-kRCPxh-size-xl stitches-c-ikZMpV-lbczQP-size-md stitches-c-ikZMpV-iezwQgf-css">
                Add your Community
              </button>
            </a>
          </div>
          <div
            style={{ opacity: 1, transform: 'translateY(0px) translateZ(0px)' }}
          >
            <button
              type="button"
              className="h-[73px] bg-transparent text-[20px] font-medium text-content-primary tablet:h-none tablet:text-xxs"
            >
              I already have an account
            </button>
          </div>
        </div>
        <div
          className="z-0 flex h-full w-full items-center justify-end tablet:h-auto tablet:justify-center mobile:w-auto"
          style={{ opacity: 1 }}
        >
          <div className="mr-[-16%] h-full max-h-[710px] w-full max-w-[1116px] desktop:h-[518px] desktop:max-w-[814px] tablet:mr-none tablet:aspect-[3/2] tablet:h-auto tablet:w-[115vw] tablet:max-w-[115vw]">
            <div className="h-full w-full">
              <div className style={{ width: '100%', height: '100%' }}>
                <canvas
                  width={1558}
                  height={1038}
                  style={{
                    verticalAlign: 'top',
                    width: '779px',
                    height: '519px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex w-full flex-col gap-[188px] mobile:mt-[124px] mobile:gap-[124px]">
        <section className="flex w-full items-center gap-3xl tablet:gap-xl mobile:gap-none flex-row-reverse mobile:flex-col">
          <div className="flex w-1/2 items-center mobile:w-full mobile:justify-center">
            <div className="flex w-full max-w-[462px] flex-col gap-xs mobile:max-w-[326px] mobile:gap-3xs mobile:px-none mobile:items-center">
              <h2 className="heading text-[20px] font-semibold uppercase desktop:text-xs mobile:text-xxs text-pink-primary">
                QUESTS
              </h2>
              <h1 className="heading text-xl desktop:text-lg mobile:text-center mobile:text-md">
                Explore bite-sized lessons
              </h1>
              <p className="body text-md font-normal desktop:text-sm mobile:text-center mobile:text-xxs">
                Accelerate your crypto journey with endless quests to guide you
                through the ecosystem.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center mobile:w-full">
            <div className="my-[-200px] flex h-[700px] w-full items-center tablet:h-[600px] mobile:my-[-100px] mobile:h-[500px]">
              <div className="h-full w-full">
                <div className style={{ width: '100%', height: '100%' }}>
                  <canvas
                    width={734}
                    height={1200}
                    style={{
                      verticalAlign: 'top',
                      width: '367px',
                      height: '600px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full flex-col items-center gap-xl">
          <h1 className="heading text-center text-[40px] desktop:text-[36px] mobile:max-w-[284px] mobile:text-md">
            For every stage of your journey
          </h1>
          <div className="flex justify-center gap-[92px] tablet:w-full tablet:justify-between tablet:gap-none mobile:flex-col">
            <div className="mt-auto w-full">
              <div className="[1mobile:w-[200px] mt-auto flex w-[250px] flex-col items-center gap-[20px] tablet:w-[168px]">
                <img
                  src="/images/landing/levelNew.svg"
                  className="w-full max-w-[96px] tablet:max-w-[80px] mobile:max-w-[64px]"
                />
                <div className="flex max-w-[200px] flex-col items-center gap-3xs">
                  <h2 className="heading text-xl tablet:text-md mobile:text-xs">
                    New
                  </h2>
                  <p className="body text-center text-xs font-normal tablet:text-xxs">
                    Learn onchain fundamentals
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto w-full mobile:flex mobile:justify-end">
              <div className="[1mobile:w-[200px] mt-auto flex w-[250px] flex-col items-center gap-[20px] tablet:w-[168px]">
                <img
                  src="/images/landing/levelAdvanced.svg"
                  className="w-full max-w-[160px] tablet:max-w-[128px] mobile:mt-[-30%] mobile:max-w-[106px]"
                />
                <div className="flex max-w-[200px] flex-col items-center gap-3xs">
                  <h2 className="heading text-xl tablet:text-md mobile:text-xs">
                    Intermediate
                  </h2>
                  <p className="body text-center text-xs font-normal tablet:text-xxs">
                    Unlock the latest concepts and trends
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto w-full">
              <div className="[1mobile:w-[200px] mt-auto flex w-[250px] flex-col items-center gap-[20px] tablet:w-[168px]">
                <img
                  src="/images/landing/levelExpert.svg"
                  className="w-full max-w-[151px] tablet:max-w-[128px] mobile:mt-[-30%] mobile:max-w-[100px]"
                />
                <div className="flex max-w-[200px] flex-col items-center gap-3xs">
                  <h2 className="heading text-xl tablet:text-md mobile:text-xs">
                    Expert
                  </h2>
                  <p className="body text-center text-xs font-normal tablet:text-xxs">
                    Master strategies to succeed onchain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full items-center gap-3xl tablet:gap-xl mobile:gap-none mobile:flex-col-reverse">
          <div className="flex w-1/2 items-center mobile:w-full mobile:justify-center">
            <div className="flex w-full max-w-[462px] flex-col gap-xs mobile:max-w-[326px] mobile:gap-3xs mobile:px-none mobile:items-center">
              <h2 className="heading text-[20px] font-semibold uppercase desktop:text-xs mobile:text-xxs text-green-primary">
                GAMES
              </h2>
              <h1 className="heading text-xl desktop:text-lg mobile:text-center mobile:text-md">
                Make learning crypto exciting
              </h1>
              <p className="body text-md font-normal desktop:text-sm mobile:text-center mobile:text-xxs">
                Stay motivated and compete with others, with leaderboards, NFTs
                and achievements.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center mobile:w-full">
            <div className="mx-auto flex h-[500px] w-full items-center tablet:h-[350px] mobile:h-[269px]">
              <div className="h-full w-full">
                <div className style={{ width: '100%', height: '100%' }}>
                  <canvas
                    width={734}
                    height={700}
                    style={{
                      verticalAlign: 'top',
                      width: '367px',
                      height: '350px',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full items-center gap-3xl tablet:gap-xl mobile:gap-none flex-row-reverse mobile:flex-col-reverse">
          <div className="flex w-1/2 items-center mobile:w-full mobile:justify-center">
            <div className="flex w-full max-w-[462px] flex-col gap-xs mobile:max-w-[326px] mobile:gap-3xs mobile:px-none mobile:items-center">
              <h2 className="heading text-[20px] font-semibold uppercase desktop:text-xs mobile:text-xxs text-blue-primary">
                PRODUCTS
              </h2>
              <h1 className="heading text-xl desktop:text-lg mobile:text-center mobile:text-md">
                Powerful tools, one click away
              </h1>
              <p className="body text-md font-normal desktop:text-sm mobile:text-center mobile:text-xxs">
                Simple and delightful products for your onchain needs.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center mobile:w-full">
            <div className="mx-auto flex h-[500px] items-center mobile:h-[269px]">
              <img
                src="/images/landing/productsVisual.svg"
                alt="game visual"
                className="h-full max-h-[400px] w-full object-contain mobile:max-h-[217px]"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center py-xl">
          <div className="relative mb-[-15%] flex h-[800px] w-[800px] items-center justify-center mobile:mb-[-30%] mobile:h-[480px] mobile:w-[480px]">
            <div
              className="absolute flex aspect-square items-center justify-center animate-spin-reverse-slow opacity-40"
              style={{ width: '752px', height: '752px', padding: '16px' }}
            >
              <div className="relative flex h-full w-full rounded-circle border border-background-quaternary">
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ivZmQP-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmSWTPANnTQr2JMANVCmbiMvppb4VbDctzNPkrEyufhM2y?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ieRPjtV-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmfQLeuNPQmf4DrJK7D4NnLwZcoaMn9qiNmSQg9F7GKnpM?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-icJODO-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qme1WeMx42w5jq4Vws3tGsSK7trwWgKrBVdBBaqNhRBwPu?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ihlKeos-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmZjJxvkmnmmMWNi26nvH51uXsB6tg9GgbLLN7j1sj2xer?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibTyxHo-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qmf7kAWubpWKw1HS25yNZKkHy8aTwL1Q4yw6woKoSpLtk9?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iliPZaj-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmaU1RYj28YwRZLdMM8hYw9cRkH3ybcAm6AqKnhYCVLtka?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibljzSv-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmUCZbze7qy5kURCyyy8odT9oC2tFUJ2JqKcbFovDed4Un?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iiXVpCy-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qmdt8u7mvuGpX8rBmdRjb5N9h1NYyZwUfM8RkMJ6gkAJ8e?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igzymxr-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmasyiijMB5dcVRUNu79hTRQbVCWU8hd1cEugFoSvBrsdB?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibygPCF-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qmbx3grRLyhGEokCBR1h3favuqjWR5qTaHvaQfWRuKfSbq?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ijDqbMX-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmNh25mPrZ35avQM7kPUxei1rfxJtNCqqhSRDp2ovWoSTc?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iftZZdI-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmZsrGxjq1ijb6Wfgf8k8N3pP7jCJAa7JXeNnT6g3z6L3b?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ihsperd-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmW8u4Ty92X6GBoHqqne9Utxi5QgkBJ6Aq95DdL1ExTULL?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ieMhBYW-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmRRj58usTHhSD8GZY5EhEAmErQkVgefxHX7gr6fmZipji?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute flex aspect-square items-center justify-center animate-spin-slow opacity-60"
              style={{ width: '592px', height: '592px', padding: '16px' }}
            >
              <div className="relative flex h-full w-full rounded-circle border border-background-quaternary">
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ikxwqrQ-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmWj9AgNb2v7TxckHhAvzXgi3oC7ANTaFoQ8y3YvktxaLw?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igRkyOn-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmWWMt7gcphk3ep8R3y74h9ap2in9ZwXWku4iPMSkMtTw6?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iihUmuy-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmTx4qZBK8C2NjfqKzFGxv34CCtooM3AHdPXi8sMwAZuux?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-icNGKRR-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmfMYi3wkTvNAmf5ykq1HAhqfVsysBHkUALCa3XXTzMZ2i?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ikONvNH-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmYCQi9fjMum6QJwjitgLDTSw9frWM6kZveeByHysvACLt?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ijmFIks-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmdwNiaPotLUSNxR2463XLNQ5dG7oWk3QxNaepKufZAgvj?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iiDfExl-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qma4FXMEXAj88hndCX2Wd4kewoXFxPAbcQL6NS4hfFopzd?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-icMBZiT-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmWjo2a3qCm6qxgdkW7AZSeGSbbWpAsiFn27LeAdzF9nVA?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-icqUapm-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmU3sM4rsZ66qV5MjRL18wr4SBJaVr7fC2Gyrc1NTnfk1X?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igPDwMJ-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmZ5qq3VDQKb5N7zzjHkh8HNrZ4tzrNNbk5nKTines3hdd?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iiZyBQL-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmY5WBocDKbZRDXKYesVGPjesmtLPd63PhhgfeVfv8KN1X?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ifQNHDk-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmZyJckdDKseWfiQyewSetGwKEM5xJ6P7JGbL9c7CCMaTp?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute flex aspect-square items-center justify-center animate-spin-reverse-slow opacity-80"
              style={{ width: '432px', height: '432px', padding: '16px' }}
            >
              <div className="relative flex h-full w-full rounded-circle border border-background-quaternary">
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igqUKKg-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmZoV9QzRJwP88D9cbnhTi4hYiPGYFPr57tNhQAKnz7RaK?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iWduPp-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmNqf96YeWPkL4nuWz5ubuLAU6w7i5WKz9Dmj4DwcVSskP?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibEeMmt-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmRdhL3PhoFqa336HwUgYJnPf9eYJ89qkXazMV7JFvxRje?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ifRCSfB-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmdDGf7ysLmj4KV9fpXy8DoCrdHbehgZpBYtEgPv18S6Q5?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ihCcUtB-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmS9NAEoB2x7Go557vKh3XuUQHT43QbCFkATmtFcsZXgD5?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-idREnyV-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmVuBopp4omfmbuNbxz5KikpAjnnFYeBA5Zurpn3CBqVcw?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ihhborF-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmUQWBv45HtKY995mx8rBenMjPtVxrxv14YZF3RjyPmZcP?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ighbZbp-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmaBinkYwj4QyeZXXwVMgc6JGosEptf5vuSwDCJmTVybVx?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iipHBna-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmWMk72Y94EMn2LbGdmbpFUf4qn8e6rNRX2HAKQWbrExpZ?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igzPnoR-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmV4waNw3ibDifShKwnZKZ8UKjsioPoKW6fyXjovY1Fgmd?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div
              className="absolute flex aspect-square items-center justify-center animate-spin-slow"
              style={{ width: '272px', height: '272px', padding: '16px' }}
            >
              <div className="relative flex h-full w-full rounded-circle border border-background-quaternary">
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibuONoV-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmTUefEyqzfSugwvbCnTjzRdFvp4L5yA6qjEx1yspsr17z?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ijwCZQo-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmQgW1EMVhpAzYQHJ8aJj5quDnYPFDf7RNcui2XiaMaqKL?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibCqJZI-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmerjxnHa9wTmdMXfj7oo3FDgiRjHeSqTYWu4N82v71prf?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-igwUWea-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmdqfrEwGcZFbYwJfiJDoWMdHLCdwRY5vb2TMMzoANzknW?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ibHqGOE-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/Qmck7w7GiGSQCwraBV79EBzB8A8QNURo2hMGMZ5gpun9T1?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-icTvnqI-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmW1g8p7gzqxZH5DmrfnHepKUoyzQbC36Nps7kYDwJppBN?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-iiQnxok-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmRFd8NbcbDNy4fNpsSzZW9S8cHfjU3Dg7hebttRkBvv1F?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
                <div className="stitches-c-fjAWSI stitches-c-fjAWSI-ihnfoUy-css">
                  <img
                    width={32}
                    height={32}
                    src="https://l3img.b-cdn.net/ipfs/QmP3ZbudEo7KJbwZp2C6HthgKcbzDyJbhrNmRkTfciyCcd?width=64&optimizer=image"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <img
              src="/images/landing/blockySmile.svg"
              className="h-[127px] mobile:h-[88px]"
            />
          </div>
          <div className="z-1 flex w-full max-w-[700px] flex-col items-center gap-lg bg-gradient-to-t from-background-primary from-90% to-transparent">
            <h1 className="heading bg-gradient-to-t from-contrast-low from-0% to-content-primary to-40% bg-clip-text text-center text-[64px] font-semibold leading-tight tracking-tight text-transparent mobile:text-lg mobile:text-content-primary">
              Join 500,000 crypto <br className="hidden mobile:block" />
              explorers
            </h1>
            <div className="pb-3xs">
              <a href="/quests">
                <button className="stitches-c-ikZMpV stitches-c-ikZMpV-cgkpnU-isLoading-undefined stitches-c-ikZMpV-lhXyu-color-primary stitches-c-ikZMpV-kRCPxh-size-xl stitches-c-ikZMpV-frZNaK-size-md stitches-c-ikZMpV-ihPgUVm-css">
                  Get started
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Layout;
