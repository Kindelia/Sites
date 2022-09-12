import {Command} from 'cmdk';

export type CommandMenuProps = {};

export function CommandMenu(_props: CommandMenuProps): JSX.Element {
  
  return (
    <Command label="Command Menu">
      <Command.Input />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Projects">
          <Command.Item>Hub</Command.Item>
          <Command.Item>HVM</Command.Item>
          <Command.Item>Kind</Command.Item>
          <Command.Item>Chain</Command.Item>
        </Command.Group>

        <Command.Group heading="Letters">
          <Command.Item>a</Command.Item>
          <Command.Item>b</Command.Item>
          <Command.Separator />
          <Command.Item>c</Command.Item>
        </Command.Group>

        <Command.Item>Apple</Command.Item>
      </Command.List>
    </Command>
  );
}
