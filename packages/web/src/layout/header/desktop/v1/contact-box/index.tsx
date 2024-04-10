export interface ContactBoxProps {
  title: string;
  phone: string;
}

export function ContactBox({ title, phone }: ContactBoxProps) {
  return (
    <div className="contact-box hidden flex-none items-center gap-4 text-accent-900 dark:text-white xl:flex">
      <svg
        className="flex-none"
        width={56}
        height={56}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_6638)">
          <path
            d="M32.4961 31.2344H43.5131"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.4961 36.3438H43.5131"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.4961 41.4531H43.5131"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6836 13.043H23.7006"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6836 18.1523H23.7006"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6836 23.2656H18.1921"
            stroke="currentColor"
            strokeWidth="2.57908"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <mask
            id="mask0_2_6638"
            style={{ maskType: 'luminance' }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={56}
            height={56}
          >
            <path
              d="M0.644531 0.988289H55.6445V55.9883H0.644531V0.988289Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_2_6638)">
            <path
              d="M38.0098 48.2368H42.9184H45.2996C45.5524 48.2368 45.525 48.2277 45.7504 48.3464L50.5188 50.792C50.7776 50.8863 50.8994 50.8164 50.8873 50.5577L50.6102 45.4688C50.6041 45.4293 50.595 45.4232 50.6224 45.3989C53.1986 43.2087 54.8428 39.9511 54.8428 36.3283V35.8111C54.8428 29.259 49.4775 23.8994 42.9184 23.8994H32.8423C26.2834 23.8994 20.918 29.259 20.918 35.8111V36.3283C20.918 42.8772 26.2834 48.2368 32.8423 48.2368H34.2888"
              stroke="currentColor"
              strokeWidth="2.57908"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0404 6.14562H23.4466C30.0056 6.14562 35.3709 11.5053 35.3709 18.0573V18.5713C35.3709 20.4846 34.9142 22.2946 34.1042 23.9006M22.1829 30.483H13.3736H10.9924C10.7366 30.483 10.764 30.4739 10.5386 30.5895L5.77016 33.0382C5.51438 33.1325 5.38956 33.0624 5.40471 32.8009L5.67885 27.715C5.68486 27.6724 5.69399 27.6663 5.6666 27.645C3.09052 25.4549 1.44922 22.1971 1.44922 18.5713V18.0573C1.44922 11.5053 6.81462 6.14562 13.3736 6.14562H15.3194"
              stroke="currentColor"
              strokeWidth="2.57908"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_2_6638">
            <rect
              width="54.9899"
              height={55}
              fill="white"
              transform="translate(0.746094 0.988281)"
            />
          </clipPath>
        </defs>
      </svg>
      <div>
        <p>{title}</p>
        <a
          href={`tel:${phone.split(' ').join('')}`}
          className="block font-secondary text-lg font-bold leading-[1.3]"
        >
          {phone}
        </a>
      </div>
    </div>
  );
}
