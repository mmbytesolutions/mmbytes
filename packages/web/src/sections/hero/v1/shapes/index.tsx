import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';

const commonClasses = cn('pointer-events-none absolute z-1');

export function Shapes() {
  return (
    <>
      {/* Top left  */}
      <span
        className={cn(commonClasses, 'left-0 top-0 hidden lg:block')}
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <svg
          width={214}
          height={470}
          viewBox="0 0 214 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M-154.988 -640.533C-246.834 -636.395 -330.486 -574.566 -390.536 -466.574C-450.36 -358.902 -479.66 -218.08 -472.988 -70.0004C-466.315 78.0794 -424.469 215.685 -355.204 317.54C-285.682 419.745 -196.811 473.749 -104.965 469.61C-13.1178 465.472 70.4961 403.695 130.583 295.651C190.427 187.978 219.708 47.1472 213.036 -100.913C206.364 -248.972 164.536 -386.609 95.2513 -488.463C25.6902 -590.666 -63.1409 -644.672 -154.988 -640.533ZM-105.01 468.611C-196.497 472.734 -285.06 418.886 -354.378 316.973C-423.556 215.274 -465.326 77.8246 -471.989 -70.0454C-478.652 -217.915 -449.414 -358.584 -389.663 -466.083C-329.792 -573.817 -246.43 -635.412 -154.943 -639.534C-63.4555 -643.657 25.1082 -589.809 94.3861 -487.894C163.564 -386.195 205.334 -248.746 211.997 -100.866C218.66 47.0142 189.462 187.651 129.671 295.162C69.8394 402.894 -13.5225 464.489 -105.01 468.611Z"
            className="fill-accent-900 dark:fill-white"
          />
        </svg>

        <span className="absolute left-[125px] top-[215px] z-1">
          <svg
            className="animate-rotate-me"
            width="58"
            height="59"
            viewBox="0 0 58 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7784 0.611394L22.6412 15.4979L0.18668 18.792L15.0728 35.9193L18.3573 58.3842L35.4946 43.4977L57.9491 40.2036L43.0626 23.0663L39.7784 0.611394Z"
              fill="white"
            />
          </svg>
        </span>
      </span>

      {/* Bottom right  */}
      <span
        className={cn(commonClasses, 'right-0 top-[60px] hidden lg:block')}
        data-aos="fade-left"
        data-aos-delay="350"
      >
        <svg
          width={136}
          height={869}
          viewBox="0 0 136 869"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M48.0704 97.0361C-7.79726 170.055 -14.2044 273.878 29.9236 389.295C73.9511 504.333 162.993 617.297 280.717 707.37C398.442 797.442 530.753 853.837 653.301 866.248C776.281 878.688 874.776 845.322 930.644 772.303C986.511 699.284 992.934 595.523 948.791 480.043C904.775 364.99 815.714 252.035 698.005 161.975C580.296 71.9148 447.974 15.4858 325.413 3.09053C202.409 -9.31698 103.938 24.0171 48.0704 97.0361ZM929.85 771.695C874.201 844.428 776.023 877.659 653.397 865.251C531.024 852.874 398.883 796.52 281.325 706.576C163.767 616.631 74.8022 503.813 30.861 388.942C-13.1838 273.828 -6.7843 170.377 48.8646 97.6437C104.513 24.9107 202.691 -8.32025 325.293 4.11942C447.666 16.4969 579.807 72.8502 697.373 162.801C814.939 252.752 903.904 365.519 947.829 480.428C991.898 595.511 985.498 698.962 929.85 771.695Z"
            className="fill-accent-900 dark:fill-white"
          />
        </svg>

        <span className="absolute right-[80px] top-[350px] z-1">
          <svg
            className="animate-rotate-me"
            width="58"
            height="59"
            viewBox="0 0 58 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.7784 0.611394L22.6412 15.4979L0.18668 18.792L15.0728 35.9193L18.3573 58.3842L35.4946 43.4977L57.9491 40.2036L43.0626 23.0663L39.7784 0.611394Z"
              fill="white"
            />
          </svg>
        </span>
      </span>

      {/* Bottom  */}
      <div
        className={cn(
          commonClasses,
          'bottom-0 left-0 right-0 mx-auto hidden lg:block'
        )}
        data-aos="fade-up"
        data-aos-delay="450"
      >
        <Image
          src="/assets/images/hero/shape-5.png"
          alt="hero bottom shape"
          width={1920}
          height={319}
        />
      </div>
    </>
  );
}
