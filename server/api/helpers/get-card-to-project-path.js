module.exports = {
  inputs: {
    criteria: {
      type: 'json',
      required: true,
    },
  },

  exits: {
    pathNotFound: {},
  },

  async fn(inputs, exits) {
    const card = await Card.findOne(inputs.criteria);

    if (!card) {
      throw 'pathNotFound';
    }

    let path;
    if (card.listId) {
      path = await sails.helpers
        .getListToProjectPath(card.listId)
        .intercept('pathNotFound', (nodes) => ({
          pathNotFound: {
            card,
            ...nodes,
          },
        }));
    } else {
      path = await sails.helpers
        .getBoardToProjectPath(card.boardId)
        .intercept('pathNotFound', (nodes) => ({
          pathNotFound: {
            card,
            ...nodes,
          },
        }));
    }

    return exits.success({
      card,
      ...path,
    });
  },
};
