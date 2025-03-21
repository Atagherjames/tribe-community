import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TStores } from "@/types/types";
import { cn } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";
import { useMutateLeaveCommunity } from "@/api/patch";

type TModalProps = {
  data?: TStores;
  userId?: string;
};

const LeaveCommunityModal = ({ data, userId }: TModalProps) => {
  const {
    mutateAsync: mutateAsyncLeaveCommunity,
    isPending: isLeavingPending,
  } = useMutateLeaveCommunity();
  const navigate = useNavigate();

  const handleLeaveCommunity = async (data: {
    communityId: string;
    newMembers: string[];
  }) => {
    try {
      const { communityId, newMembers } = data;

      const updatedMembers = newMembers?.filter((member) => member !== userId);

      await mutateAsyncLeaveCommunity({
        communityId,
        newMembers: updatedMembers,
      });
      navigate({ to: "/" });
      toast.success("You have left the store successfully!", {
        description: "Feel free to explore other stores or create a new one!",
      });
    } catch {
      toast.error("Failed to leave the store", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          disabled={isLeavingPending}
          type="submit"
          className={cn(
            "flex items-center justify-center w-full h-12 px-4 mt-4 font-bold uppercase rounded-md bg-light-gray text-gray-500 hover:bg-gray-300"
          )}
        >
          {isLeavingPending ? (
            <IconLoader2 className="animate-spin" size={22} />
          ) : (
            "Leave store"
          )}
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to leave this store?</DialogTitle>
          <DialogDescription className="pb-4">
            Leaving this store means you'll no longer have access to its
            discussions, events, and updates. Don't worry—you can always rejoin
            later if you change your mind
          </DialogDescription>
          <button
            onClick={() =>
              handleLeaveCommunity({
                communityId: data?.id as string,
                newMembers: data?.members as string[],
              })
            }
            disabled={isLeavingPending}
            type="submit"
            className={cn(
              "flex items-center justify-center w-full h-12 px-4 font-bold uppercase rounded-md bg-red-600 text-white hover:bg-red-700",
              isLeavingPending &&
                "bg-light-gray text-gray-500 hover:bg-light-gray"
            )}
          >
            {isLeavingPending ? (
              <IconLoader2 className="animate-spin" size={22} />
            ) : (
              "Leave store"
            )}
          </button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveCommunityModal;
