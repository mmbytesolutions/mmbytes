import { Container } from '@/src/components/container';
import { CustomLink } from '@/src/components/custom-link';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCalendarDays,
  FaDollarSign,
  FaRegFolderOpen,
  FaRegUser,
} from 'react-icons/fa6';

const commonImageClasses = cn('rounded-5 object-cover object-center');

interface OverviewProps {
  icon: React.ReactNode;
  subHeading: string;
  heading: string;
}

const projectOverviewList: OverviewProps[] = [
  {
    icon: <FaRegUser />,
    subHeading: 'Client',
    heading: 'Sandi leo rakiul',
  },
  {
    icon: <FaDollarSign />,
    subHeading: '150000  USD',
    heading: 'consulation real estate ',
  },
  {
    icon: <FaRegFolderOpen />,
    subHeading: 'Category',
    heading: 'Planing, Real Estate',
  },
  {
    icon: <FaCalendarDays />,
    subHeading: 'Date',
    heading: 'November 19, 2022',
  },
];

export function ProjectDetailsSection() {
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid gap-6">
          {/* Images and project overview area  */}
          <div className="mb-8 grid grid-cols-2 grid-rows-[.3fr_.3fr_1fr] gap-30px md:grid-rows-[.5fr_.5fr_1fr] lg:grid-cols-[1fr_1.19fr_1fr] lg:grid-rows-2">
            <div className="relative">
              <Image
                src="/assets/images/project-details/image-1.png"
                alt="project 1"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative row-start-2">
              <Image
                src="/assets/images/project-details/image-2.png"
                alt="project 2"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="relative col-start-2 row-start-1 row-end-3">
              <Image
                src="/assets/images/project-details/image-3.png"
                alt="project 3"
                className={commonImageClasses}
                fill
                sizes="100vw"
              />
            </div>
            <div className="col-start-1 col-end-3 row-start-3 lg:col-start-3 lg:row-start-1 lg:row-end-3">
              {projectOverviewList && projectOverviewList.length > 0 && (
                <div className="flex  h-full flex-col divide-y divide-accent-700 divide-opacity-20 rounded-5 border border-accent-700 border-opacity-20 dark:divide-accent-200 dark:divide-opacity-20 dark:border-accent-200 dark:border-opacity-20">
                  {projectOverviewList.map((item, index) => (
                    <div
                      className="flex flex-1 items-center px-5 py-6 2xl:px-10"
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-primary-light/[.15] text-md text-primary-light">
                          {item.icon}
                        </span>
                        <div className="text-accent-700 dark:text-white">
                          <p className="text-sm leading-[1.6]">
                            {item.subHeading}
                          </p>
                          <h3 className="mt-2 font-secondary text-md font-bold leading-[1.5] ">
                            {item.heading}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p>
            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
            orper posu ere viverra .Aliquam eros justo, posuere lobortis non,
            vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper
            posue Aliquam eros justo, posuere lobortis non laoreet augue mattis
            fermentum laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat laoreet
            augue mattis fermentum ullamcorper viverra laoreet Aliquam eros
            justo,
          </p>
          <p>
            Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc
            orper posu ere viverra .Aliquam eros justo, posuere lobortis non,
            vive rra laoreet augue s fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet mat ullamcorper
            posue loborti vive
          </p>
          <div className="my-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 2xl:grid-cols-3">
            <div className="grid gap-3">
              <div className="flex items-center gap-4">
                <span className="flex-none text-base/[1] text-primary">
                  <FaCheckCircle />
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
                  <FaCheckCircle />
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
                  <FaCheckCircle />
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

          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverr.Aliquam eros justo, posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo, posuere loborti viverra laoreet matti
            ullamcorper posuere viverra .Aliquam. justo, posuere lobortis,
            viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
            Aliquam eros justo posuere loborti ,
          </p>

          {/* Pagination Area  */}
          <div className="mb-2 mt-5 h-px bg-accent-700 dark:bg-white"></div>
          <div className="flex flex-col justify-between gap-x-16 gap-y-8 md:flex-row md:items-center">
            {/* Previous  */}
            <CustomLink
              href="#"
              className="group grid max-w-[255px] gap-3 text-accent-700 dark:text-white"
            >
              <div className="flex items-center  gap-2.5">
                <span className="transition-colors duration-300 group-hover:text-primary">
                  <FaArrowLeftLong />
                </span>
                <p className="text-base font-bold uppercase leading-[2] tracking-wide">
                  Previous
                </p>
              </div>
              <h3 className="text-md font-medium leading-[1.5]">
                Aliquam eros justo, posuere loborti viverra laoreet matti{' '}
              </h3>
            </CustomLink>

            {/* Next  */}
            <CustomLink
              href="#"
              className="group grid max-w-[255px] gap-3 text-right text-accent-700 dark:text-white max-md:self-end"
            >
              <div className="flex items-center justify-end gap-2.5">
                <p className="text-base font-bold uppercase leading-[2] tracking-wide">
                  Next
                </p>
                <span className="transition-colors duration-300 group-hover:text-primary">
                  <FaArrowRightLong />
                </span>
              </div>
              <h3 className="text-md font-medium leading-[1.5]">
                Aliquam eros justo, posuere loborti viverra laoreet matti{' '}
              </h3>
            </CustomLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
