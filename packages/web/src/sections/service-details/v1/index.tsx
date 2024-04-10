import { LinkProps, blurDataUrl } from '@/src/common-types';
import { Button } from '@/src/components/button';
import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { TextInput } from '@/src/components/inputs/text-input';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCircleCheck, FaPhone } from 'react-icons/fa6';

const services: LinkProps[] = [
  {
    label: 'AI Insights Pro',
    href: '/',
  },
  {
    label: 'Tech Armor Security',
    href: '/',
  },
  {
    label: 'Blockchain Forge',
    href: '/',
  },
  {
    label: 'DigitalIQ Consulting',
    href: '/',
  },
  {
    label: 'RapidApp Innovate',
    href: '/',
  },
  {
    label: 'RoboLogic Labs',
    href: '/',
  },
];

export function ServiceDetailsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[390px_1fr] 2xl:gap-[50px]">
          {/* Sidebar  */}
          <div className="grid gap-10 md:sticky md:top-[76px] lg:top-[133px] 2xl:gap-[60px]">
            {/* Service list  */}
            <div className="grid gap-6 rounded-5 bg-accent-100 px-10 py-30px dark:bg-accent-700">
              <h3 className="h3 text-accent-700 dark:text-white">
                Our Service
              </h3>
              {services && services.length > 0 && (
                <ul className="grid gap-3" aria-label="service list">
                  {services.map((service, index) => (
                    <li key={index}>
                      <CustomLink
                        href={service.href}
                        className="flex items-center justify-between gap-4 transition-colors duration-300 hover:text-primary"
                      >
                        <span className="flex-1">{service.label}</span>
                        <svg
                          width={22}
                          height={7}
                          viewBox="0 0 22 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            x1="4.37114e-08"
                            y1="3.5"
                            x2={20}
                            y2="3.5"
                            stroke="currentColor"
                          />
                          <path
                            d="M19.5 1.68487L21.2965 3.5L19.5 5.31513L19.5 1.68487Z"
                            fill="white"
                            stroke="currentColor"
                          />
                        </svg>
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Cta box  */}
            <div
              className={cn(
                'relative grid  min-h-[410px] place-items-center overflow-hidden rounded-5 bg-accent-100 p-10 dark:bg-accent-700',
                // after
                'after:absolute after:inset-0 after:z-1 after:bg-accent-700/95',
                // after
                'before:absolute before:inset-0 before:z-[2] before:[background:linear-gradient(180deg,rgba(185,18,2,0.00)_0%,rgba(185,18,2,0.22)_100%)]'
              )}
            >
              <Image
                src="/assets/images/project-details/sidebar-phone-number-box-bg.jpg"
                alt="sidebar-phone-number-box-bg"
                fill
                placeholder="blur"
                blurDataURL={blurDataUrl}
              />
              <div className="relative z-10 text-center">
                <span className="inline-grid h-[68px] w-[68px] place-items-center rounded-full bg-primary text-lg/[1] text-white">
                  <FaPhone />
                </span>
                <p className="mb-1 mt-6">Need help? contact our experts</p>
                <a
                  className="font-secondary text-md font-bold text-accent-700 transition-colors duration-300 hover:text-primary dark:text-white"
                  href="tel:+0032-1255-69874"
                >
                  +0032-1255-69874
                </a>
              </div>
            </div>

            {/* Search box  */}
            <div className="bg-accent-100 p-10 dark:bg-accent-700">
              <h3 className="h3 text-accent-700 dark:text-white">
                Search Service
              </h3>
              <span className="mb-7 mt-6 block h-0.5 w-[45px] bg-primary"></span>
              <div className="flex items-center gap-4">
                <TextInput
                  name="sarch"
                  placeholder="Search..."
                  className="!min-h-[40px] !py-0"
                />
                <Button className={cn('!min-h-[40px]')}>
                  <span className="relative z-1">SEARCH</span>
                </Button>
              </div>
            </div>

            {/* Testimonial    */}
            <div className="grid gap-30px">
              <div className="relative z-1 bg-accent-100 p-10 dark:bg-accent-700">
                <p>
                  Aliquam eros justo, posuere loborti vive rra laoreet matti
                  ullamc per posu ere viverra .Aliquam os justo, posuere
                  lobortis non, vive rra oreet augue mattis ferment ullam corper
                  viverra laoreet vive rra
                </p>
                <span className="absolute bottom-5 right-5 -z-1">
                  <svg
                    width="115"
                    height="82"
                    viewBox="0 0 115 82"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M98.6016 49.1471L99.6016 49.1471L99.6016 48.1471L98.6016 48.1471L98.6016 49.1471ZM33.237 49.1471L34.237 49.1471L34.237 48.1471L33.237 48.1471L33.237 49.1471ZM113.943 51.1898C113.943 67.7392 100.608 80.8294 84.3031 80.8294L84.3031 82.8294C101.702 82.8294 115.943 68.8546 115.943 51.1898L113.943 51.1898ZM84.3031 80.8294L82.2604 80.8294L82.2604 82.8294L84.3031 82.8294L84.3031 80.8294ZM82.2604 80.8294C78.2167 80.8294 75.0898 77.7025 75.0898 73.6589L73.0898 73.6589C73.0898 78.8071 77.1122 82.8294 82.2604 82.8294L82.2604 80.8294ZM75.0898 73.6589C75.0898 69.8501 78.2369 66.4883 82.2604 66.4883L82.2604 64.4883C77.092 64.4883 73.0898 68.7863 73.0898 73.6589L75.0898 73.6589ZM82.2604 66.4883L84.3031 66.4883L84.3031 64.4883L82.2604 64.4883L82.2604 66.4883ZM84.3031 66.4883C92.5037 66.4883 99.6016 59.6688 99.6016 51.1898L97.6016 51.1898C97.6016 58.5412 91.4223 64.4883 84.3031 64.4883L84.3031 66.4883ZM99.6016 51.1898L99.6016 49.1471L97.6016 49.1471L97.6016 51.1898L99.6016 51.1898ZM98.6016 48.1471L82.2604 48.1471L82.2604 50.1471L98.6016 50.1471L98.6016 48.1471ZM82.2604 48.1471C73.6208 48.1471 66.9193 41.4456 66.9193 32.806L64.9193 32.806C64.9193 42.5502 72.5162 50.1471 82.2604 50.1471L82.2604 48.1471ZM66.9193 32.806L66.9193 16.4648L64.9193 16.4648L64.9193 32.806L66.9193 32.806ZM66.9193 16.4648C66.9193 8.07034 73.631 1.1237 82.2604 1.1237L82.2604 -0.876302C72.5061 -0.876303 64.9193 6.98621 64.9193 16.4648L66.9193 16.4648ZM82.2604 1.1237L98.6016 1.1237L98.6016 -0.876299L82.2604 -0.876302L82.2604 1.1237ZM98.6016 1.1237C106.986 1.1237 113.943 8.08057 113.943 16.4649L115.943 16.4649C115.943 6.976 108.09 -0.876297 98.6016 -0.876299L98.6016 1.1237ZM113.943 16.4649L113.943 24.6354L115.943 24.6354L115.943 16.4649L113.943 16.4649ZM113.943 24.6354L113.943 32.806L115.943 32.806L115.943 24.6354L113.943 24.6354ZM113.943 32.806L113.943 51.1898L115.943 51.1898L115.943 32.806L113.943 32.806ZM48.5781 51.1898C48.5781 67.7392 35.2434 80.8294 18.9385 80.8294L18.9385 82.8294C36.3371 82.8294 50.5781 68.8546 50.5781 51.1898L48.5781 51.1898ZM18.9385 80.8294L16.8958 80.8294L16.8958 82.8294L18.9385 82.8294L18.9385 80.8294ZM16.8958 80.8294C12.8522 80.8294 9.72524 77.7025 9.72524 73.6589L7.72524 73.6589C7.72524 78.8071 11.7476 82.8294 16.8958 82.8294L16.8958 80.8294ZM9.72524 73.6589C9.72525 69.8501 12.8723 66.4883 16.8958 66.4883L16.8958 64.4883C11.7274 64.4883 7.72525 68.7863 7.72524 73.6589L9.72524 73.6589ZM16.8958 66.4883L18.9385 66.4883L18.9385 64.4883L16.8958 64.4883L16.8958 66.4883ZM18.9385 66.4883C27.1391 66.4883 34.237 59.6688 34.237 51.1898L32.237 51.1898C32.237 58.5412 26.0577 64.4883 18.9385 64.4883L18.9385 66.4883ZM34.237 51.1898L34.237 49.1471L32.237 49.1471L32.237 51.1898L34.237 51.1898ZM33.237 48.1471L16.8958 48.1471L16.8958 50.1471L33.237 50.1471L33.237 48.1471ZM16.8958 48.1471C8.25621 48.1471 1.55468 41.4456 1.55468 32.806L-0.445323 32.806C-0.445324 42.5502 7.15164 50.1471 16.8958 50.1471L16.8958 48.1471ZM1.55468 32.806L1.55468 16.4648L-0.44532 16.4648L-0.445323 32.806L1.55468 32.806ZM1.55468 16.4648C1.55468 8.07033 8.26638 1.12369 16.8958 1.12369L16.8958 -0.876313C7.14149 -0.876315 -0.445318 6.9862 -0.44532 16.4648L1.55468 16.4648ZM16.8958 1.12369L33.237 1.12369L33.237 -0.87631L16.8958 -0.876313L16.8958 1.12369ZM33.237 1.12369C41.6213 1.12369 48.5781 8.08056 48.5781 16.4648L50.5781 16.4648C50.5781 6.97599 42.7258 -0.876309 33.237 -0.87631L33.237 1.12369ZM48.5781 16.4648L48.5781 24.6354L50.5781 24.6354L50.5781 16.4648L48.5781 16.4648ZM48.5781 24.6354L48.5781 32.806L50.5781 32.806L50.5781 24.6354L48.5781 24.6354ZM48.5781 32.806L48.5781 51.1898L50.5781 51.1898L50.5781 32.806L48.5781 32.806Z"
                      className="fill-accent-700 opacity-20 dark:fill-white"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center gap-5">
                <Image
                  src={'/assets/images/service-details/person-3.png'}
                  width={66}
                  height={66}
                  alt="Darliana shimp image"
                  className="flex-none"
                />
                <div>
                  <h3 className="h3 text-accent-700 dark:text-white">
                    Darliana shimp
                  </h3>
                  <p>Manager</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content  */}
          <div className="grid gap-6">
            <div className="relative mb-5 overflow-hidden rounded-5">
              <Image
                src={'/assets/images/service-details/main-image-1.png'}
                alt="service image main"
                width={850}
                height={512}
              />
              <span className="absolute left-30px top-30px rounded-[0_8px_30px_8px] bg-white p-2.5 text-primary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27.0842 31.1C27.7477 31.641 28.1975 32.3058 28.307 33.1793C28.4015 33.938 28.1931 34.7033 27.7269 35.3093C27.2608 35.9153 26.5745 36.313 25.817 36.4163C25.2995 36.4684 24.779 36.4854 24.2591 36.4671C23.9541 36.4671 23.8211 36.5271 23.7546 36.8712C23.5856 37.7488 23.1171 38.5405 22.4293 39.1111C21.7415 39.6817 20.8769 39.9959 19.9832 40C19.0823 39.9969 18.2107 39.6798 17.5185 39.1032C16.8263 38.5266 16.3568 37.7267 16.1909 36.8413C16.1361 36.5518 16.0396 36.4606 15.7593 36.4684C15.2882 36.4886 14.8164 36.4808 14.3462 36.4449C13.0751 36.3237 12.1847 35.6562 11.7832 34.4425C11.3817 33.2288 11.7141 32.1716 12.6475 31.302C12.7062 31.246 12.7675 31.1951 12.8274 31.1391C12.8379 31.1264 12.8459 31.1118 12.8509 31.0961C10.8042 29.4495 11.4078 26.4212 13.9786 25.7172C14.0007 24.1528 13.4571 22.797 12.465 21.6094C11.7337 20.7386 10.9306 19.9212 10.2618 19.0021C4.95599 11.729 9.51225 1.22942 18.4462 0.0991535C20.0469 -0.108218 21.673 0.0104482 23.2267 0.447982C24.7804 0.885516 26.2294 1.63287 27.4867 2.64509C28.744 3.65731 29.7834 4.91347 30.5425 6.33793C31.3016 7.76239 31.7647 9.32571 31.9038 10.9338C32.2153 14.3859 31.1646 17.4064 28.8949 20.015C28.2979 20.7007 27.6838 21.376 27.1285 22.1009C26.3711 23.0825 26.0295 24.2284 25.9852 25.4604C25.9886 25.5317 26.0089 25.6011 26.0445 25.663C26.0801 25.7249 26.1299 25.7775 26.1899 25.8163C28.6733 26.9296 29.0631 29.1393 27.0842 31.1ZM21.5358 15.6465C21.5358 14.876 21.511 14.159 21.5358 13.4459C21.6062 11.7173 23.1967 10.4254 24.9631 10.6379C26.6331 10.8399 27.8494 12.5203 27.5222 14.1734C27.3976 14.8766 27.0282 15.5131 26.4795 15.9702C25.9307 16.4274 25.238 16.6757 24.5238 16.6712C23.8641 16.6816 23.2045 16.6712 22.5461 16.6712V25.6664H24.9253C25.2512 23.0265 25.6189 22.1973 27.3358 20.2327C27.6252 19.9016 27.938 19.5926 28.2183 19.2537C31.0864 15.7899 31.8112 11.8998 30.0799 7.76593C28.3578 3.65422 25.1156 1.36631 20.6415 1.04822C13.1468 0.516326 7.33254 7.77767 9.40013 15.009C9.94115 16.9006 10.9554 18.4963 12.3047 19.9042C13.5236 21.1753 14.5704 22.5532 14.8546 24.3614C14.9211 24.7916 14.9628 25.2257 15.0163 25.6651H17.3967V16.6699C16.7058 16.6699 16.0422 16.6816 15.3787 16.6699C14.5969 16.6634 13.8477 16.3562 13.2864 15.812C12.7252 15.2677 12.3951 14.5282 12.3646 13.7471C12.3125 12.0849 13.624 10.6691 15.26 10.6183C16.9939 10.5701 18.3771 11.8646 18.411 13.5776C18.424 14.2555 18.411 14.9347 18.411 15.6413L21.5358 15.6465ZM20.0236 31.6019C18.2676 31.6019 16.5129 31.6019 14.7568 31.6019C14.4975 31.5936 14.2382 31.6213 13.9864 31.684C13.0517 31.9552 12.5093 32.8482 12.6475 33.8416C12.7154 34.2966 12.9473 34.7112 13.2995 35.0072C13.6518 35.3032 14.1 35.4603 14.56 35.4489C18.1685 35.4594 21.7774 35.4594 25.3868 35.4489C25.5814 35.4502 25.775 35.4229 25.9617 35.3681C26.8743 35.0931 27.4192 34.234 27.3058 33.2575C27.2536 32.8078 27.0397 32.3924 26.7039 32.0887C26.3681 31.7851 25.9334 31.6139 25.4807 31.6071C23.6647 31.5888 21.8448 31.6032 20.0236 31.6032V31.6019ZM19.9897 26.7236C18.2011 26.7236 16.4125 26.6923 14.6252 26.7458C14.1456 26.7711 13.6835 26.934 13.2941 27.2151C12.6306 27.7066 12.4846 28.4496 12.7127 29.2344C12.8134 29.608 13.0319 29.9391 13.3359 30.1784C13.6398 30.4178 14.0129 30.5526 14.3996 30.5629C18.1229 30.5811 21.8448 30.5707 25.568 30.5629C25.7139 30.5586 25.8582 30.5313 25.9956 30.482C26.9082 30.1861 27.4296 29.3257 27.2993 28.3466C27.2363 27.8993 27.0145 27.4896 26.6744 27.1923C26.3343 26.895 25.8985 26.73 25.4468 26.7275C23.6308 26.7158 21.8096 26.7275 19.9897 26.7275V26.7236ZM21.5019 16.7142H18.4475V25.6833H21.5019V16.7142ZM17.4293 15.6074C17.4293 14.9908 17.4293 14.3624 17.4293 13.734C17.4292 13.5716 17.4126 13.4095 17.3798 13.2504C17.2869 12.7672 17.0211 12.3344 16.6321 12.033C16.2431 11.7316 15.7577 11.5823 15.2666 11.613C14.7753 11.6475 14.3131 11.8581 13.9646 12.2061C13.6162 12.554 13.4049 13.016 13.3697 13.5072C13.2889 14.4471 13.9707 15.4627 14.9133 15.5852C15.7202 15.6921 16.5533 15.6087 17.4293 15.6087V15.6074ZM22.5253 15.6426C23.3283 15.6426 24.0766 15.6987 24.8132 15.6296C25.3196 15.5755 25.7858 15.3288 26.1154 14.9405C26.4449 14.5523 26.6125 14.0522 26.5836 13.5437C26.5549 13.0268 26.3312 12.5401 25.9576 12.1817C25.584 11.8234 25.0883 11.6201 24.5707 11.613C24.0528 11.6067 23.5523 11.7999 23.173 12.1525C22.7937 12.5052 22.5645 12.9902 22.5331 13.5072C22.4927 14.2021 22.5253 14.9008 22.5253 15.6465V15.6426ZM17.1803 36.501C17.2677 37.8842 18.5687 39.0209 20.0105 38.9988C21.4524 38.9766 22.7482 37.8086 22.7612 36.501H17.1803Z" />
                  <path d="M2.63928 3.53125C2.78414 3.58087 2.92604 3.63874 3.06427 3.70461C4.27406 4.39989 5.48211 5.09517 6.68842 5.79046C6.96349 5.9482 7.20206 6.18156 6.99347 6.48792C6.88657 6.64436 6.50591 6.79559 6.37294 6.72258C5.04843 6.00427 3.74347 5.24946 2.45286 4.47118C2.31597 4.38905 2.24167 4.08009 2.26644 3.89106C2.2886 3.75678 2.51543 3.65249 2.63928 3.53125Z" />
                  <path d="M37.2811 3.52344C37.4193 3.63946 37.6135 3.73072 37.6722 3.87933C37.7147 4.045 37.6914 4.2207 37.607 4.36951C37.5484 4.48423 37.3919 4.55853 37.2681 4.63024C36.1183 5.2964 34.9645 5.95736 33.8147 6.62483C33.4888 6.81386 33.1629 6.92465 32.9452 6.5127C32.7392 6.1216 33.0234 5.92347 33.3232 5.75139C34.4757 5.08913 35.6255 4.42166 36.7779 3.76071C36.9161 3.6851 37.0699 3.62643 37.2811 3.52344Z" />
                  <path d="M37.807 20.2492C37.8175 20.7524 37.4159 20.9871 37.0418 20.7915C36.5816 20.5517 36.1397 20.2792 35.6899 20.0198C34.9181 19.5739 34.1477 19.1242 33.3733 18.6822C33.0617 18.505 32.8128 18.2912 33.0331 17.9105C33.2534 17.5298 33.5545 17.6341 33.8726 17.8166C35.0368 18.4919 36.2075 19.1542 37.3664 19.8386C37.5299 19.9565 37.6779 20.0945 37.807 20.2492Z" />
                  <path d="M2.61456 20.9327C2.4842 20.818 2.28604 20.7254 2.22347 20.5768C2.17869 20.4129 2.19634 20.2383 2.27301 20.0866C2.31603 19.9837 2.46203 19.9172 2.57284 19.8533C3.737 19.178 4.90638 18.5105 6.06793 17.8313C6.39645 17.6397 6.71976 17.5237 6.94138 17.9291C7.15127 18.3137 6.87359 18.5248 6.57375 18.6969C5.40742 19.3679 4.24065 20.0393 3.07345 20.7111C2.94308 20.7828 2.81011 20.8375 2.61456 20.9327Z" />
                  <path d="M2.67774 12.7082C1.99593 12.7082 1.31543 12.7017 0.634921 12.7082C0.280328 12.7082 -0.00387107 12.5987 3.98853e-05 12.2102C0.00395084 11.8217 0.286845 11.7096 0.641438 11.7109C2.03504 11.7109 3.42864 11.7109 4.82355 11.7109C5.17944 11.7109 5.44278 11.8491 5.42975 12.2402C5.41671 12.6313 5.14685 12.7069 4.81703 12.7056C4.10393 12.7043 3.39084 12.7082 2.67774 12.7082Z" />
                  <path d="M37.2442 12.7095C36.5467 12.7095 35.8506 12.7095 35.1583 12.7095C34.8129 12.7095 34.5208 12.6287 34.5195 12.2233C34.5182 11.8178 34.7959 11.7136 35.1466 11.7149C36.5415 11.7149 37.9355 11.7149 39.3287 11.7149C39.6885 11.7149 39.9558 11.8557 39.9492 12.2363C39.9414 12.5922 39.6794 12.716 39.3404 12.7121C38.6378 12.7043 37.9416 12.7095 37.2442 12.7095Z" />
                </svg>
              </span>
            </div>
            <p>
              Aliquam eros justo, posuere loborti viverra lao ullamcorper
              posuere viverra .Aliquam eros justo, posuere lobortis non, viverra
              laoreet augue mattis start fermentum ullamcor viverra laoreet By
              Admin . Creativity . 28th February 2022 . Leave a comment viverra
              laoreet augue mattis start fermentum start fermentum ullamcor
              laoreet augue mattis start fermentum ullamcor viverra laoreet.
            </p>
            <p>
              Aliquam eros justo, posuere loborti viverra lao ullamcorper
              posuere viverra .Aliquam eros justo, posuere lobortis non, viverra
              laoreet augue mattis start fermentum ullamcor viverra laoreet By
              Admin . Creativity . 28th February 2022 . Leave a comment viverra
              laoreet augue mattis start fermentum start fermentum
            </p>
            <div className="my-10 grid items-center gap-8 md:grid-cols-2">
              <Image
                src="/assets/images/service-details/image-2.png"
                alt="service image 2"
                width={640}
                height={426}
                className="rounded-5"
              />
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Best Emplementation
                    </h3>
                  </div>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted bioiiy desig.
                  </p>
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex-none text-base/[1] text-primary">
                      <FaCircleCheck />
                    </span>
                    <h3 className="flex-1 text-md font-bold text-accent-700 dark:text-white">
                      Best Emplementation
                    </h3>
                  </div>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    ished fact that a reader will acted bioiiy desig.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Aliquam eros justo, posuere loborti viverra lao ullamcorper
              posuere viverra .Aliquam eros justo, posuere lobortis non, viverra
              laoreet augue mattis start fermentum ullamcor viverra laoreet By
              Admin . Creativity . 28th February 2022 . Leave a comment viverra
              laoreet augue mattis start fermentum start fermentum
            </p>

            <div className="mt-2.5 grid grid-cols-[1fr_260px] gap-6">
              <div className="grid items-baseline gap-6 lg:gap-9">
                <div>
                  <h3 className="text-md font-bold text-accent-700 dark:text-white">
                    Best Emplementation
                  </h3>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    the.ished fact that a reader will be distrol acted bioiiy
                    bioiiy desig the.ished fact that a reader.
                  </p>
                </div>
                <div>
                  <h3 className="text-md font-bold text-accent-700 dark:text-white">
                    Design make for you.
                  </h3>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    the.ished fact that a reader will be distrol acted bioiiy
                    bioiiy desig the.ished fact that a reader.
                  </p>
                </div>
                <div>
                  <h3 className="text-md font-bold text-accent-700 dark:text-white">
                    Finished the process
                  </h3>
                  <p>
                    ished fact that a reader will be distrol acted bioiiy desig
                    the.ished fact that a reader will be distrol acted bioiiy
                    bioiiy desig the.ished fact that a reader.
                  </p>
                </div>
              </div>
              <Image
                src="/assets/images/service-details/image-3.png"
                alt="service image 2"
                width={640}
                height={870}
                className="rounded-5"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
