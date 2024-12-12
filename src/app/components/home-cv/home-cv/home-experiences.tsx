"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import {
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { setDirty, triggerSubmission } from "@/helpers/form.helpers";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui";
import { CursorGrab, GarbageBin } from "@/icons";
import { Title } from "./title";

const KEY = "experiences";

type ExperienceEntryProps = {
  id: string;
  index: number;
  onDelete: () => void;
};

const ExperienceEntry = (props: ExperienceEntryProps) => {
  const { id, index, onDelete } = props;
  const { register } = useFormContext();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger>
        <fieldset
          ref={setNodeRef}
          style={style}
          {...attributes}
          className="group flex flex-col gap-4"
          role="group"
        >
          <div className="flex flex-col py-1">
            <div className="grid grid-cols-[2fr,3fr] gap-4 py-1">
              <input {...register(`${KEY}.${index}.place`)} className="font-semibold" />
              <input {...register(`${KEY}.${index}.period`)} className="text-right" />
            </div>
            <input {...register(`${KEY}.${index}.title`)} />
          </div>

          <Textarea
            {...register(`${KEY}.${index}.originalDescription`)}
            className="!min-h-[300px] whitespace-pre-wrap"
          />
        </fieldset>
      </HoverCardTrigger>
      <HoverCardContent
        side="left"
        align="start"
        sideOffset={40}
        className="reset flex flex-col gap-2"
      >
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              {...listeners}
              type="button"
              aria-label="Drag to reorder"
              className="md accent-2 flex-center cursor-grab"
            >
              <CursorGrab size={24} />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Drag to reorder
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="md accent-2 flex-center" onClick={onDelete}>
              <GarbageBin size={20} />
            </TooltipTrigger>
            <TooltipContent side="left" sideOffset={8}>
              Delete experience
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </HoverCardContent>
    </HoverCard>
  );
};

export const Experiences = () => {
  const { control } = useFormContext();
  const { fields, remove, move } = useFieldArray({
    control,
    name: KEY,
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = fields.findIndex((field) => field.id === active.id);
      const newIndex = fields.findIndex((field) => field.id === over?.id);
      move(oldIndex, newIndex);
      setDirty(KEY);
      triggerSubmission();
    }
  };

  return (
    <section>
      <Title>Experience ({fields.length})</Title>
      <div className="space-y-8 py-2">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={fields.map((field) => field.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="flex flex-col gap-11">
              {fields.map((field, index) => (
                <ExperienceEntry
                  key={field.id}
                  id={field.id}
                  index={index}
                  onDelete={() => remove(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
};
