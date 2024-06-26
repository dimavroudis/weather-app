import { Card, Image, SimpleGrid } from "@mantine/core";
import Widget from "../../components/widget";
import Heart from "../../assets/svgs/heart.svg?react";

type ActivitiesProps = {
  activities: {
    title: string;
    image: string;
  }[];
  className?: string;
};

const Activities = ({ activities, className = "" }: ActivitiesProps) => {
  return (
    <Widget className={`lg:px-8 px-3 ${className}`}>
      <h2 className="flex justify-start items-start gap-xs lg:text-2xl text-sm mb-9">
        <Heart className="w-5 lg:w-8 flex-shrink-0" />
        Activities in your area
      </h2>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }} className="px-4">
        {activities.map((activity) => (
          <Card
            key={activity.title}
            className="bg-transparent border-0 mb-4"
            px="0"
            py="0"
            radius={0}
          >
            <Image
              src={activity.image}
              alt={activity.title}
              radius="sm"
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
            <h3 className="text-xs">{activity.title}</h3>
          </Card>
        ))}
      </SimpleGrid>
    </Widget>
  );
};

export default Activities;
