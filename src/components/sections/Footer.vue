<template>
  <footer class="app-footer__main d-flex justify-content-center align-items-center">
    <section class="app-footer__logos d-flex justify-content-between align-items-center">
      <a class="app-footer__links">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
          <path
            id="original-plain"
            d="M61.785,5.07H8.39A3.31,3.31,0,0,0,5.08,8.379V61.756a3.31,3.31,0,0,0,3.31,3.309H37.125V41.836H29.312V32.779h7.813V26.1c0-7.748,4.736-11.968,11.653-11.968a64.2,64.2,0,0,1,6.988.356v8.1H50.983c-3.764,0-4.492,1.787-4.492,4.409v5.783h8.969l-1.166,9.057h-7.8V65.07H61.77a3.315,3.315,0,0,0,3.31-3.309V8.384a3.31,3.31,0,0,0-3.3-3.314Z"
            transform="translate(-5.08 -5.07)"
            fill="#fff"
          />
        </svg>
      </a>
      <a class="app-footer__links" href="https://www.linkedin.com/in/marcin-nonna-56882817b/" target="_blank">
        <svg viewBox="0 0 128 128">
          <path
            id="linkedin"
            d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z"
          />
        </svg>
      </a>
      <a class="app-footer__links" href="https://github.com/mnonna" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
          <g id="github-original" transform="translate(-3.612 -5.103)">
            <path
              id="Path_60"
              data-name="Path 60"
              d="M23.612,5.1a20.258,20.258,0,0,0-20,20.506A20.472,20.472,0,0,0,17.289,45.068c1,.19,1.366-.445,1.366-.986,0-.489-.019-2.1-.027-3.818-5.564,1.24-6.738-2.419-6.738-2.419a5.4,5.4,0,0,0-2.221-3c-1.815-1.273.137-1.246.137-1.246a4.216,4.216,0,0,1,3.066,2.113c1.784,3.134,4.679,2.228,5.82,1.7a4.41,4.41,0,0,1,1.27-2.742c-4.442-.518-9.112-2.277-9.112-10.134a8.05,8.05,0,0,1,2.061-5.5,7.538,7.538,0,0,1,.193-5.426s1.679-.551,5.5,2.1a18.5,18.5,0,0,1,10.017,0c3.817-2.653,5.494-2.1,5.494-2.1a7.532,7.532,0,0,1,.2,5.426,8.034,8.034,0,0,1,2.058,5.5c0,7.876-4.679,9.61-9.132,10.118a4.968,4.968,0,0,1,1.357,3.8c0,2.744-.023,4.952-.023,5.627,0,.546.36,1.185,1.374.984A20.47,20.47,0,0,0,43.612,25.609a20.258,20.258,0,0,0-20-20.506Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </g>
        </svg>
      </a>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer__main {
  width: 100%;
  background-color: #f1f2f6;
  @media screen and (min-width: 320px) {
    height: 100px;
    .app-footer__logos {
      height: 30px;
      width: 200px;
      svg {
        width: 30px;
        height: 100%;
        path {
          fill: black;
        }
      }
    }
  }
  @media screen and (min-width: 360px) {
    .app-footer__logos {
      height: 40px;
      width: 200px;
      svg {
        width: 40px;
        height: 100%;
      }
    }
  }
}
</style>