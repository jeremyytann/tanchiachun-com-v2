export default function Introduction() {
  return (
    <div className="mb-16 md:mb-24 lg:mb-36 lg:flex lg:justify-between">
      <div className="mb-16 lg:mb-0">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight color-secondary">
            Tan Chia Chun
          </h1>
          <h2 className="text-lg md:text-xl font-medium color-secondary">
            Software Developer
          </h2>
          <p className="text-md md:text-lg font-light color-primary">
            I enjoy turning ideas into projects.
          </p>
        </div>
        
        <div className="mt-9 flex gap-6 items-center">
          <a className="block text-zinc-300 hover:text-zinc-50" href="https://github.com/jeremyytann" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub">
            <span className="sr-only">
              GitHub
            </span>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none" className="h-7 w-7" aria-hidden="true">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="14" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265">
              </path>
            </svg>
          </a>

          <a className="block text-zinc-300 hover:text-zinc-50" href="https://www.linkedin.com/in/jeremyytann/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn">
            <span className="sr-only">
              LinkedIn
            </span>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd">
              </path>
            </svg>
          </a>

          <a className="block text-zinc-300 hover:text-zinc-50" href="https://instagram.com/tanchiachun/" target="_blank" rel="noreferrer noopener" aria-label="Instagram (opens in a new tab)" title="Instagram">
            <span className="sr-only">
              Instagram
            </span>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34">
              </path>
            </svg>
          </a>
        </div>
      </div>

      <div className="lg:w-[52%] flex flex-col gap-5">
        <p className="text-md md:text-lg font-light color-primary leading-8">
          Lorem ipsum dolor sit amet, <span className="font-bold color-secondary">consectetur</span> adipiscing elit. 
          Mauris et velit nec lectus vestibulum mollis. Fusce id 
          porttitor orci, eu scelerisque ante. Nulla consequat sed 
          lorem quis pretium. Pellentesque dictum est id aliquet vulputate. 
          Suspendisse at malesuada orci. Nunc rhoncus dolor sit amet nisi 
          varius, quis cursus massa lacinia. Class aptent taciti sociosqu 
          ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Cras dapibus sollicitudin felis, ut efficitur neque ultricies ac. 
          Integer sodales lacus non congue facilisis.
        </p>

        <p className="text-md md:text-lg font-light color-primary leading-8">
          Lorem ipsum dolor sit amet, <span className="font-bold color-secondary">consectetur</span> adipiscing elit. 
          Mauris et velit nec lectus vestibulum mollis. Fusce id 
          porttitor orci, eu scelerisque ante. Nulla consequat sed 
          lorem quis pretium. Pellentesque dictum est id aliquet vulputate. 
          Suspendisse at malesuada orci. Nunc rhoncus dolor sit amet nisi 
          varius, quis cursus massa lacinia. Class aptent taciti sociosqu 
          ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Cras dapibus sollicitudin felis, ut efficitur neque ultricies ac. 
          Integer sodales lacus non congue facilisis.
        </p>
      </div>
    </div>
  );
}
