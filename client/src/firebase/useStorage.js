import { useState, useEffect } from "react";
import { appStorage, timestamp } from "./config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [URL, seturl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = appStorage.ref(file.name);
    // const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        // const createdAt = timestamp();
        // await collectionRef.add({ url, createdAt });
        seturl(url);
      }
    );
  }, [file]);

  return { progress, URL, error };
};

export default useStorage;
