import React, { useState, ChangeEvent } from 'react';
import { Input, Textarea, Button, Spacer, Card, Radio, RadioGroup } from '@nextui-org/react';
import { motion } from 'framer-motion';

// Type for flexible change event
type FlexibleChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Create: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');
  const [nftType, setNftType] = useState('image');
  const [file, setFile] = useState<File | null>(null);
  const [blogContent, setBlogContent] = useState('');
  const [gameHostingDetails, setGameHostingDetails] = useState('');

  const handleNftNameChange = (e: FlexibleChangeEvent) => setNftName(e.target.value);
  const handleNftDescriptionChange = (e: FlexibleChangeEvent) => setNftDescription(e.target.value);
  const handleNftTypeChange = (e: ChangeEvent<HTMLInputElement>) => setNftType(e.target.value);
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const handleBlogContentChange = (e: FlexibleChangeEvent) => setBlogContent(e.target.value);
  const handleGameHostingDetailsChange = (e: FlexibleChangeEvent) => setGameHostingDetails(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nftName, nftDescription, nftType, file, blogContent, gameHostingDetails });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Card
        as={motion.div}
        variants={fadeIn}
        className="p-8 max-w-lg w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg border border-white border-opacity-20"
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent"
          variants={fadeIn}
        >
          Create Your NFT Masterpiece
        </motion.h2>

        <form onSubmit={handleSubmit}>
          <Input
            fullWidth
            label="NFT Name"
            placeholder="Enter the name of your NFT"
            value={nftName}
            onChange={handleNftNameChange}
            className="mb-4 bg-white bg-opacity-20 text-gray-200 placeholder-gray-400 border-none rounded-lg"
          />
          <Spacer y={1} />
          <Textarea
            fullWidth
            label="NFT Description"
            placeholder="Enter a description for your NFT"
            value={nftDescription}
            onChange={handleNftDescriptionChange}
            rows={4}
            className="mb-4 bg-white bg-opacity-20 text-gray-200 placeholder-gray-400 border-none rounded-lg"
          />
          <Spacer y={1} />
          <RadioGroup
            label="NFT Type"
            value={nftType}
            onChange={handleNftTypeChange}
            className="mb-4 text-white"
          >
            <Radio value="image">Image</Radio>
            <Radio value="video">Video</Radio>
            <Radio value="audio">Audio (Podcast)</Radio>
            <Radio value="blog">Blog</Radio>
            <Radio value="game">Game</Radio>
          </RadioGroup>

          {nftType === 'blog' ? (
            <Textarea
              fullWidth
              label="Blog Content"
              placeholder="Enter your blog content"
              value={blogContent}
              onChange={handleBlogContentChange}
              rows={8}
              className="mb-4 bg-white bg-opacity-20 text-gray-200 placeholder-gray-400 border-none rounded-lg"
            />
          ) : nftType === 'game' ? (
            <Input
              fullWidth
              label="Game Hosting Details"
              placeholder="Enter details for hosting your game"
              value={gameHostingDetails}
              onChange={handleGameHostingDetailsChange}
              className="mb-4 bg-white bg-opacity-20 text-gray-200 placeholder-gray-400 border-none rounded-lg"
            />
          ) : (
            <Input
              type="file"
              accept={nftType === 'image' ? 'image/*' : nftType === 'video' ? 'video/*' : 'audio/*'}
              onChange={handleFileChange}
              className="mb-4 bg-white bg-opacity-20 text-gray-200 placeholder-gray-400 border-none rounded-lg"
            />
          )}
          <Spacer y={1} />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none rounded-lg py-2 text-lg font-semibold hover:opacity-90"
          >
            Create NFT
          </Button>
        </form>
      </Card>
    </motion.div>
  );
};

export default Create;
