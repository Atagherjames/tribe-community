import { useEffect, useRef, useState } from "react";
import { EStoreType, EStorePrice } from "@/enums/enums";
import { getInitials } from "@/lib/getInitials";
import { getPocketBaseFileUrl } from "@/lib/getPocketBaseFileUrl";
import { cn } from "@/lib/utils";
import { TStores } from "@/types/types";

import { IconLockOpen2, IconTag, IconUsers } from "@tabler/icons-react";
import { Skeleton } from "../ui/skeleton";

type TAboutAndPreviewPageProps = {
  data?: TStores;
  isLoading: boolean;
};

const AboutAndPreviewPage = ({
  data,
  isLoading,
}: TAboutAndPreviewPageProps) => {
  const [showFullText, setShowFullText] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const { scrollHeight, clientHeight } = descriptionRef.current;
      setIsOverflowing(scrollHeight > clientHeight);
    }
  }, [data?.description]);

  return (
    <main className="w-full h-full">
      <div className="w-full p-6 bg-white border rounded-xl">
        {isLoading ? (
          <Skeleton className="w-1/3 h-8 mb-6" />
        ) : (
          <h1 className="mb-6 text-2xl font-bold">{data?.name}</h1>
        )}
        {isLoading ? (
          <Skeleton className="w-full rounded-xl h-96 max-md:h-48" />
        ) : (
          <>
            {data?.banner ? (
              <img
                alt="Store banner"
                src={getPocketBaseFileUrl({
                  recordId: data?.id,
                  filename: data?.banner,
                  collectionName: data?.collectionName,
                })}
                className="object-cover w-full rounded-xl h-96 max-md:h-48"
              />
            ) : (
              <div className="flex items-center justify-center w-full bg-light-gray rounded-xl h-96 max-md:h-48">
                <p className="text-2xl font-medium">{data?.name}</p>
              </div>
            )}
          </>
        )}
        <div className="flex flex-wrap items-center w-full gap-10 mt-10 mb-6 max-md:gap-4">
          <span className="flex items-center gap-2 text-base font-medium capitalize max-md:text-sm whitespace-nowrap text-dark-primary">
            <IconLockOpen2 size={26} />
            {isLoading ? (
              <Skeleton className="h-4 w-28" />
            ) : (
              <span>{EStoreType.PUBLIC} store</span>
            )}
          </span>

          {/* Store Members */}
          <span className="flex items-center gap-2 text-base font-medium capitalize max-md:text-sm whitespace-nowrap text-dark-primary">
            <IconUsers size={26} />
            {isLoading ? (
              <Skeleton className="h-4 w-28" />
            ) : (
              <span>
                {data?.members?.length}{" "}
                {(data?.members?.length as number) > 1 ? "members" : "member"}
              </span>
            )}
          </span>

          <span className="flex items-center gap-2 text-base font-medium capitalize max-md:text-sm whitespace-nowrap text-dark-primary">
            <IconTag size={26} />
            {isLoading ? (
              <Skeleton className="h-4 w-28" />
            ) : (
              <span>{EStorePrice.FREE}</span>
            )}
          </span>

          {/* Store Owner */}
          <div className="flex items-center gap-2 text-base font-medium capitalize max-md:text-sm whitespace-nowrap text-dark-primary">
            {data?.expand?.createdBy?.avatar ? (
              <img
                src={getPocketBaseFileUrl({
                  recordId: data?.expand?.createdBy?.id,
                  filename: data?.expand?.createdBy?.avatar,
                  collectionName: data?.expand?.createdBy?.collectionName,
                })}
                alt="store avatar"
                className="object-cover rounded-full size-9 min-h-9 min-w-9"
              />
            ) : (
              <div className="flex items-center justify-center font-medium rounded-full min-h-9 min-w-9 bg-light-gray size-9">
                <p>
                  {getInitials(data?.expand?.createdBy?.username as string)}
                </p>
              </div>
            )}
            {isLoading ? (
              <Skeleton className="h-4 w-28" />
            ) : (
              <p>By {data?.expand?.createdBy?.username} 👑</p>
            )}
          </div>
        </div>

        {/* Store Description */}
        <div>
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <Skeleton key={index} className="w-full h-5 mb-2" />
            ))
          ) : (
            <p
              ref={descriptionRef}
              className={cn(!showFullText && "line-clamp-[10]")}
            >
              {data?.description}
            </p>
          )}
          {!isLoading && isOverflowing && (
            <button
              className="font-medium text-blue-500 underline"
              onClick={() => setShowFullText(!showFullText)}
              type="button"
            >
              {showFullText ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default AboutAndPreviewPage;
