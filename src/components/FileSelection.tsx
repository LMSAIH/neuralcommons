import { useState } from 'react';
import { open } from '@tauri-apps/plugin-dialog';
import { Button } from './ui/button';

function FileSelection() {
    const [selectedFolder, setSelectedFolder] = useState('');

    const handleSelectFolder = async () => {
        try {
            const result = await open({
                directory: true,
                multiple: false,
            });

            if (result) {
                setSelectedFolder(result);
            } else {
                setSelectedFolder('No folder selected');
            }
        } catch (error) {
            console.error('Error opening dialog:', error);
        }
    };

    return (
        <div>
            <Button onClick={handleSelectFolder}>Select Folder</Button>
            <p>Selected Folder: {selectedFolder}</p>
        </div>
    );
}

export default FileSelection;